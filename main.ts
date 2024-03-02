import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

import { getCollisionMap, getHeightMap, getRoadCurve, road } from "./src/js/meshes";
import { createCollisionMap, createHeightMap, getCollision, getHeight } from "./src/js/utils";
import { Actor } from "./src/js/Actor";
import { Terrain } from "./src/js/Terrain";
import { Keys } from "./src/js/Keys";
import skyleft from "./src/assets/images/sky/skyleft.png";
import skyright from "./src/assets/images/sky/skyright.png";
import skytop from "./src/assets/images/sky/skytop.png";
import skybottom from "./src/assets/images/sky/skybottom.png";
import skyfront from "./src/assets/images/sky/skyfront.png";
import skyback from "./src/assets/images/sky/skyback.png";

type CameraMode = "camera" | "orbit" | "player" | "bird" | "collision_map" | "height_map" | "map";

(function () {
  const cameraMode: CameraMode = "player";

  const keys = new Keys();

  const speedMax = 0.3;
  const speedAcceleration = 0.001;
  const speedDeceleration = 0.001;

  const turnMax = 0.04;
  const turnAcceleration = 0.0015;
  const turnDeceleration = 0.005;

  const repulsion = new THREE.Vector3();
  const presentPosition = new THREE.Vector3();
  const futurePosition = new THREE.Vector3();

  const actor = new Actor();
  const cameraPosition = new THREE.Vector3();
  const terrain = new Terrain();
  const tilt = new THREE.Vector2();

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);
  const clock = new THREE.Clock();
  const renderer = new THREE.WebGLRenderer();
  renderer.shadowMap.enabled = true;
  renderer.setSize(window.innerWidth, window.innerHeight);
  //const light = new THREE.AmbientLight(0x404040); // soft white light
  //scene.add(light);

  scene.background = new THREE.CubeTextureLoader().load([skyright, skyleft, skytop, skybottom, skyfront, skyback]);

  const controls = new OrbitControls(camera, renderer.domElement);

  const curve = getRoadCurve();
  //scene.background.minFilter = THREE.NearestFilter;
  //scene.background.magFilter = THREE.NearestFilter;

  scene.add(terrain);
  scene.add(road(curve));
  scene.add(actor);
  actor.position.set(16, 0, 0);

  let speed = 0;
  let rotateSpeed = 0;
  let heightData: ImageData;
  let collisionData: ImageData;

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
      case "player":
        const direction = new THREE.Vector3();
        actor.getWorldDirection(direction);

        // Handle stearing
        if (keys.isLeftDown) {
          rotateSpeed = Math.min(rotateSpeed + turnAcceleration, turnMax);
        } else if (keys.isRightDown) {
          rotateSpeed = Math.max(rotateSpeed - turnAcceleration, -turnMax);
        } else if (rotateSpeed > 0) {
          rotateSpeed = Math.max(rotateSpeed - turnDeceleration, 0);
        } else if (rotateSpeed < 0) {
          rotateSpeed = Math.min(rotateSpeed + turnDeceleration, 0);
        }

        if (Math.abs(rotateSpeed)) {
          actor.rotateY(rotateSpeed);
          actor.model.rotation.z = Math.PI + rotateSpeed * 15;
        }

        // Handle speedAcceleration
        if (keys.isUpDown) {
          speed = Math.min(speed + speedAcceleration, speedMax);
        } else {
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
            speed *= 0.5;
          } else if (right < left) {
            energy.x += -repulsionAmount;
            speed *= 0.5;
          } else {
            energy.z += -repulsionAmount;
            speed *= 0.25;
          }

          repulsion.copy(energy.applyEuler(actor.rotation));
        } else {
          repulsion.lerp(new THREE.Vector3(), 0.1);
        }

        // Handle tilt
        //const direction = new THREE.Vector2(rotationY.x, rotationY.z);
        const y = getHeight(heightData, actor.position, 0, 8.5);
        const direction2 = new THREE.Vector2(direction.x, direction.z);
        const angle = direction2.angle();
        const forwardVector = new THREE.Vector2(2, 0).rotateAround(new THREE.Vector2(0, 0), angle);
        const forwardPosition = actor.position.clone().add(new THREE.Vector3(forwardVector.x, 0, forwardVector.y));
        const forwardHeight = getHeight(heightData, forwardPosition, 0, 8.5);

        tilt.copy(new THREE.Vector2(2, y - forwardHeight));

        // Update objects
        actor.position.add(direction.multiplyScalar(speed)).add(repulsion);
        actor.position.lerp(actor.position.clone().setY(y), 0.25);

        actor.cameraPosition.getWorldPosition(cameraPosition);
        camera.position.copy(cameraPosition);
        camera.quaternion.copy(actor.cameraPosition.getWorldQuaternion(new THREE.Quaternion()));
        break;

      case "camera":
        actor.position.copy(presentPosition);
        actor.lookAt(futurePosition);
        actor.cameraPosition.getWorldPosition(cameraPosition);

        camera.position.copy(cameraPosition);
        camera.quaternion.copy(actor.cameraPosition.getWorldQuaternion(new THREE.Quaternion()));
        break;

      case "bird":
        actor.position.copy(presentPosition);
        actor.lookAt(futurePosition);

        camera.position.copy(new THREE.Vector3(0, 0, 0).add(new THREE.Vector3(0, 1, 0).multiplyScalar(50)));
        camera.lookAt(actor.getWorldPosition(new THREE.Vector3()));
        break;

      case "orbit":
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
    if (cameraMode === "collision_map") {
      createCollisionMap(curve);
    } else if (cameraMode === "height_map") {
      createHeightMap(curve);
    } else {
      document.body.appendChild(renderer.domElement);

      if (cameraMode === "orbit") {
        camera.position.set(16, 2, 4);
        controls.update();
      }

      animate();

      window.addEventListener("resize", onWindowResize, false);
    }
  }

  init();
})();
