import * as THREE from "three";
import { road, roadSpine } from "./src/js/meshes";
import skyleft from "./src/assets/images/sky/skyleft.png";
import skyright from "./src/assets/images/sky/skyright.png";
import skytop from "./src/assets/images/sky/skytop.png";
import skybottom from "./src/assets/images/sky/skybottom.png";
import skyfront from "./src/assets/images/sky/skyfront.png";
import skyback from "./src/assets/images/sky/skyback.png";

enum CameraModes {
  PLAYER,
  BIRD,
  MAP,
}

function componentToHex(c: number) {
  var hex = c.toString(16);

  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r: number, g: number, b: number) {
  return "#" + componentToHex(Math.floor(r)) + componentToHex(Math.floor(g)) + componentToHex(Math.floor(b));
}

const cameraMode: CameraModes = CameraModes.MAP;

const createHeightMap = (curve: THREE.CurvePath<THREE.Vector3>) => {
  const width = 512;
  const height = 1024;

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;

  document.body.appendChild(canvas);

  const context = canvas.getContext("2d");
  const points = curve.getSpacedPoints(500);
  const max = 8.5;
  const min = 0;
  const colInc = 1 / max;

  //context.imageSmoothingEnabled = false;
  context.fillStyle = "#ff0000";
  context.fillRect(0, 0, width, height);

  points.forEach((point) => {
    const value = point.y * colInc * 255;
    context.fillStyle = rgbToHex(value, value, value);
    context.beginPath();
    context.arc(width / 2 + point.x * 5, height / 2 + point.z * 5, 6, 0, 2 * Math.PI);
    context.fill();
    context.closePath();
  });

  const imageData = context.getImageData(0, 0, width, height);
};

const geometry1 = new THREE.BoxGeometry(0.25, 0.25, 0.25);
const geometry2 = new THREE.BoxGeometry(0.5, 0.5, 0.5);
const material1 = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const material2 = new THREE.MeshBasicMaterial({ color: 0x0000ff });
const cube = new THREE.Mesh(geometry1, material1);
const cube1 = new THREE.Mesh(geometry2, material2);
const cube2 = new THREE.Mesh(geometry2, material2);
const presentPosition = new THREE.Vector3();
const futurePosition = new THREE.Vector3();
const actor = new THREE.Group();
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);
const clock = new THREE.Clock();
const spline = roadSpine();
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

function updateCamera() {
  const time = clock.getElapsedTime();
  const looptime = 20;
  const present = (time % looptime) / looptime;
  const future = ((time + 0.001) % looptime) / looptime;

  spline.getPointAt(present, presentPosition);
  spline.getPointAt(future, futurePosition);

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

if (cameraMode === CameraModes.MAP) {
  createHeightMap(spline);
} else {
  document.body.appendChild(renderer.domElement);

  scene.background = new THREE.CubeTextureLoader().load([skyright, skyleft, skytop, skybottom, skyfront, skyback]);
  //scene.background.minFilter = THREE.NearestFilter;
  //scene.background.magFilter = THREE.NearestFilter;
  cube1.position.setZ(-4);
  cube1.position.setY(1);
  cube2.position.setZ(-2);
  cube2.position.setY(0.5);

  road(scene, spline);

  actor.add(cube);
  actor.add(cube2);
  actor.add(cube1);
  scene.add(actor);
  cube2.lookAt(cube1.position);

  animate();
}
