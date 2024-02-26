import * as THREE from "three";
import { road } from "./src/js/meshes";

enum CameraModes {
  PLAYER,
  BIRD,
}

const cameraMode: CameraModes = CameraModes.PLAYER;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);

scene.background = new THREE.CubeTextureLoader()
  .setPath("./src/assets/images/sky/")
  .load(["skyright.png", "skyleft.png", "skytop.png", "skybottom.png", "skyfront.png", "skyback.png"]);
//scene.background.minFilter = THREE.NearestFilter;
//scene.background.magFilter = THREE.NearestFilter;

const geometry1 = new THREE.BoxGeometry(0.25, 0.25, 0.25);
const geometry2 = new THREE.BoxGeometry(0.5, 0.5, 0.5);
const material1 = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const material2 = new THREE.MeshBasicMaterial({ color: 0x0000ff });
const cube = new THREE.Mesh(geometry1, material1);
const cube1 = new THREE.Mesh(geometry2, material2);
const cube2 = new THREE.Mesh(geometry2, material2);
cube1.position.setZ(-4);
cube1.position.setY(1);
cube2.position.setZ(-2);
cube2.position.setY(0.5);

const path = road(scene);

const actor = new THREE.Group();
const clock = new THREE.Clock();

actor.add(cube);
actor.add(cube2);
actor.add(cube1);
scene.add(actor);
cube2.lookAt(cube1.position);

const presentPosition = new THREE.Vector3();
const futurePosition = new THREE.Vector3();

function updateCamera() {
  const time = clock.getElapsedTime();
  const looptime = 20;
  const present = (time % looptime) / looptime;
  const future = ((time + 0.001) % looptime) / looptime;

  path.getPointAt(present, presentPosition);
  path.getPointAt(future, futurePosition);

  actor.position.copy(presentPosition);
  actor.lookAt(futurePosition);

  switch (cameraMode) {
    case CameraModes.PLAYER:
      camera.position.copy(cube2.getWorldPosition(new THREE.Vector3()));
      camera.quaternion.copy(cube2.getWorldQuaternion(new THREE.Quaternion()));
      break;

    case CameraModes.BIRD:
    default:
      const cameraPosition = new THREE.Vector3(0, 0, 0).add(new THREE.Vector3(0, 1, 0).multiplyScalar(50));
      camera.position.copy(cameraPosition);
      camera.lookAt(actor.getWorldPosition(new THREE.Vector3()));
      break;
  }
}

function animate() {
  requestAnimationFrame(animate);
  updateCamera();
  renderer.render(scene, camera);
}

animate();
