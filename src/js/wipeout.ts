import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import { getCollisionMap, getHeightMap, getRoadCurve, road } from './meshes';
import { createCollisionMap, createHeightMap, getCollision, getHeight } from './utils';
import { Actor } from './Actor';
import { Terrain } from './Terrain';
import { Keys } from './Keys';
import skyleft from './src/assets/images/sky/skyleft.png';
import skyright from './src/assets/images/sky/skyright.png';
import skytop from './src/assets/images/sky/skytop.png';
import skybottom from './src/assets/images/sky/skybottom.png';
import skyfront from './src/assets/images/sky/skyfront.png';
import skyback from './src/assets/images/sky/skyback.png';

type CameraMode = 'camera' | 'orbit' | 'player' | 'bird' | 'collision_map' | 'height_map' | 'map';

export class Wipeout {
	constructor() {
		console.log('wipout!!!');
	}
}

(function () {
	const cameraMode: CameraMode = 'player';

	const keys = new Keys();

	const lapTimes = ['01:29:43', '02:33:52', '02:17:46'];

	const speedMax = 0.3;
	const speedAcceleration = 0.001;
	const speedDeceleration = 0.002;

	const turnMax = 0.04;
	const turnAcceleration = 0.002;
	const turnDeceleration = 0.005;

	const repulsion = new THREE.Vector3();
	const presentPosition = new THREE.Vector3();
	const futurePosition = new THREE.Vector3();

	const actor = new Actor();
	const cameraPosition = new THREE.Vector3();
	const terrain = new Terrain();
	const tilt = new THREE.Vector2();
	const cameraRoll = new THREE.Object3D();

	const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera(
		100,
		window.innerWidth / window.innerHeight,
		0.1,
		1000
	);
	const clock = new THREE.Clock();
	const renderer = new THREE.WebGLRenderer();
	renderer.shadowMap.enabled = true;
	renderer.setSize(window.innerWidth, window.innerHeight);
	//const light = new THREE.AmbientLight(0x404040); // soft white light
	//scene.add(light);

	scene.background = new THREE.CubeTextureLoader().load([
		skyright,
		skyleft,
		skytop,
		skybottom,
		skyfront,
		skyback
	]);

	const controls = new OrbitControls(camera, renderer.domElement);

	const curve = getRoadCurve();
	scene.background.minFilter = THREE.NearestFilter;
	scene.background.magFilter = THREE.NearestFilter;

	scene.add(terrain);
	scene.add(road(curve));
	scene.add(actor);
	actor.position.set(16, 0, 0);

	let speed = 0;
	let speedPrevious = 0;
	let rotationY = 0;
	let heightData: ImageData;
	let collisionData: ImageData;
	let isLeftTurning = false;
	let isRightTurning = false;

	getHeightMap().then((imageData) => (heightData = imageData));
	getCollisionMap().then((imageData) => (collisionData = imageData));

	function updateCamera() {
		const time = clock.getElapsedTime();
		const looptime = 20;
		const present = (time % looptime) / looptime;
		const future = ((time + 0.001) % looptime) / looptime;

		curve.getPointAt(present, presentPosition);
		curve.getPointAt(future, futurePosition);

		switch (cameraMode) {
			case 'player':
				const direction = new THREE.Vector3();
				actor.getWorldDirection(direction);

				// Handle stearing
				if (keys.isLeftDown && keys.isRightDown) {
					isLeftTurning = true;
					isRightTurning = true;

					if (rotationY > 0) {
						rotationY = Math.max(rotationY - turnDeceleration, 0);
					} else if (rotationY < 0) {
						rotationY = Math.min(rotationY + turnDeceleration, 0);
					}
				} else if (keys.isLeftDown) {
					isLeftTurning = true;
					isRightTurning = false;
					rotationY = Math.min(rotationY + turnAcceleration, turnMax);
				} else if (keys.isRightDown) {
					isRightTurning = true;
					isLeftTurning = false;
					rotationY = Math.max(rotationY - turnAcceleration, -turnMax);
				} else {
					isLeftTurning = false;
					isRightTurning = false;

					if (rotationY > 0) {
						rotationY = Math.max(rotationY - turnDeceleration, 0);
					} else if (rotationY < 0) {
						rotationY = Math.min(rotationY + turnDeceleration, 0);
					}
				}

				const y = getHeight(heightData, actor.position, 0, 8.5);

				// Handle tilt
				const direction2 = new THREE.Vector2(direction.x, direction.z);
				const angle = direction2.angle();
				const forwardVector = new THREE.Vector2(2, 0).rotateAround(new THREE.Vector2(0, 0), angle);
				const forwardPosition = actor.position
					.clone()
					.add(new THREE.Vector3(forwardVector.x, 0, forwardVector.y));
				const forwardHeight = getHeight(heightData, forwardPosition, 0, 8.5);
				const heightDiff = y - forwardHeight;
				const speedDiff = speed - speedPrevious;
				const quaternion = new THREE.Quaternion();
				quaternion
					.setFromEuler(actor.model.rotation)
					.slerp(
						new THREE.Quaternion().setFromEuler(
							new THREE.Euler(
								Math.PI + 0.1 + heightDiff * 1 + speedDiff * 30,
								-rotationY * 5,
								Math.PI + rotationY * 30
							)
						),
						0.1
					);

				const cameraQuaternion = new THREE.Quaternion();
				cameraQuaternion
					.setFromEuler(actor.cameraPosition.rotation)
					.slerp(
						new THREE.Quaternion().setFromEuler(
							new THREE.Euler(
								actor.cameraPosition.rotation.x,
								actor.cameraPosition.rotation.y,
								Math.PI + rotationY * 5
							)
						),
						0.25
					);

				actor.rotateY(rotationY);
				actor.model.rotation.setFromQuaternion(quaternion);
				actor.cameraPosition.rotation.setFromQuaternion(cameraQuaternion);
				actor.shadow.rotation.y = -rotationY * 5;

				// Handle speedAcceleration
				if (keys.isUpDown) {
					speedPrevious = speed;
					speed = Math.min(speed + speedAcceleration, speedMax);
				} else {
					speedPrevious = speed;
					speed = Math.max(speed - speedDeceleration, 0);
				}

				// Handle collision
				const collision = getCollision(collisionData, actor.position, direction);

				if (collision) {
					const energy = new THREE.Vector3();
					const repulsionAmount = Math.max(speed, 0.01);
					const [left, right] = collision;

					if (right > left) {
						energy.x += repulsionAmount;
						speedPrevious = speed;
						speed *= 0.5;
					} else if (right < left) {
						energy.x += -repulsionAmount;
						speedPrevious = speed;
						speed *= 0.5;
					} else {
						energy.z += -repulsionAmount;
						speedPrevious = speed;
						speed *= 0.25;
					}

					repulsion.copy(energy.applyEuler(actor.rotation));
				} else {
					repulsion.lerp(new THREE.Vector3(), 0.1);
				}

				// Update objects
				actor.position.add(direction.multiplyScalar(speed)).add(repulsion);
				actor.position.lerp(actor.position.clone().setY(y), 0.25);

				actor.cameraPosition.getWorldPosition(cameraPosition);
				camera.position.copy(cameraPosition);
				camera.quaternion.copy(actor.cameraPosition.getWorldQuaternion(new THREE.Quaternion()));
				break;

			case 'camera':
				actor.position.copy(presentPosition);
				actor.lookAt(futurePosition);
				actor.cameraPosition.getWorldPosition(cameraPosition);

				camera.position.copy(cameraPosition);
				camera.quaternion.copy(actor.cameraPosition.getWorldQuaternion(new THREE.Quaternion()));
				break;

			case 'bird':
				actor.position.copy(presentPosition);
				actor.lookAt(futurePosition);

				camera.position.copy(
					new THREE.Vector3(0, 0, 0).add(new THREE.Vector3(0, 1, 0).multiplyScalar(50))
				);
				camera.lookAt(actor.getWorldPosition(new THREE.Vector3()));
				break;

			case 'orbit':
			default:
				controls.update();
				break;
		}
	}

	function animate() {
		requestAnimationFrame(animate);
		updateCamera();
		renderer.render(scene, camera);
	}

	function onWindowResize() {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize(window.innerWidth, window.innerHeight);
	}

	function init() {
		if (cameraMode === 'collision_map') {
			createCollisionMap(curve);
		} else if (cameraMode === 'height_map') {
			createHeightMap(curve);
		} else {
			document.body.appendChild(renderer.domElement);

			const timeing = document.createElement('p');
			timeing.innerText = 'LAP TIMES';
			timeing.style.position = 'absolute';
			timeing.style.top = '256px';
			timeing.style.left = '48px';
			timeing.style.fontSize = '2rem';
			timeing.style.fontFamily = 'wipeout';
			timeing.style.color = '#ffffff';
			timeing.style.margin = '0';

			lapTimes.map((time, index) => {
				const timeing2 = document.createElement('p');
				timeing2.innerText = `${index + 1}. ${time}`;
				timeing2.style.position = 'absolute';
				timeing2.style.top = `${256 + (index + 1) * 48}px`;
				timeing2.style.left = '48px';
				timeing2.style.fontSize = '2rem';
				timeing2.style.fontFamily = 'wipeout';
				timeing2.style.color = '#f9b714';
				timeing2.style.margin = '0';

				document.body.appendChild(timeing2);
			});

			const timeing4 = document.createElement('p');
			timeing4.innerText = 'TIME';
			timeing4.style.position = 'absolute';
			timeing4.style.top = '48px';
			timeing4.style.left = '48px';
			timeing4.style.fontSize = '2rem';
			timeing4.style.fontFamily = 'wipeout';
			timeing4.style.color = '#f9b714';
			timeing4.style.margin = '0';

			const timeing3 = document.createElement('p');
			timeing3.innerText = '01:35:45';
			timeing3.style.position = 'absolute';
			timeing3.style.top = '96px';
			timeing3.style.left = '48px';
			timeing3.style.fontSize = '5rem';
			timeing3.style.fontFamily = 'wipeout';
			timeing3.style.color = '#ffffff';
			timeing3.style.margin = '0';
			document.body.style.position = 'relative';
			document.body.appendChild(timeing);
			document.body.appendChild(timeing3);
			document.body.appendChild(timeing4);

			if (cameraMode === 'orbit') {
				camera.position.set(16, 2, 4);
				controls.update();
			}

			animate();

			window.addEventListener('resize', onWindowResize, false);
		}
	}

	init();
});
