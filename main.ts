import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { road } from "./src/js/meshes";

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

enum CameraModes {
  PLAYER,
  BIRD,
}

const cameraMode: CameraModes = CameraModes.PLAYER;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const geometry = new THREE.BoxGeometry(0.5, 1, 0.5);
const geometry2 = new THREE.BoxGeometry(0.5, 0.5, 0.5);

const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const material2 = new THREE.MeshBasicMaterial({ color: 0x0000ff });

const cube = new THREE.Mesh(geometry, material);
const cube2 = new THREE.Mesh(geometry2, material2);
const cube1 = new THREE.Mesh(geometry2, material2);
cube1.position.setY(-4);
cube1.position.setZ(2);
cube2.position.setY(-2);
cube2.position.setZ(1);

//const controls = new OrbitControls(camera, renderer.domElement);

camera.position.z = 100;

//controls.update();

const [roadMeshes, path] = road();
scene.add(...roadMeshes);

const actor = new THREE.Group();
const clock = new THREE.Clock();

actor.add(cube);
actor.add(cube2);
actor.add(cube1);
scene.add(actor);
cube2.lookAt(cube1.position);

function updateCamera() {
  const time = clock.getElapsedTime();
  const looptime = 20;
  const point = (time % looptime) / looptime;

  const position = path.getPointAt(point);
  const tangent = path.getTangentAt(point).normalize();

  const up = new THREE.Vector3(0, 1, 0);
  const axis = new THREE.Vector3().crossVectors(up, tangent).normalize();
  const radians = Math.acos(up.dot(tangent));

  actor.position.copy(position);
  actor.quaternion.setFromAxisAngle(axis, radians);

  switch (cameraMode) {
    case CameraModes.PLAYER:
      camera.position.copy(cube2.getWorldPosition(new THREE.Vector3()));
      camera.quaternion.copy(cube2.getWorldQuaternion(new THREE.Quaternion()));
      break;

    case CameraModes.BIRD:
    default:
      const cameraPosition = actor.position.clone().add(new THREE.Vector3(0, 0, 1).multiplyScalar(100));

      camera.position.copy(cameraPosition);
      camera.lookAt(cube1.getWorldPosition(new THREE.Vector3()));
      break;
  }
}

function animate() {
  requestAnimationFrame(animate);
  updateCamera();
  //controls.update();
  renderer.render(scene, camera);
}

animate();
