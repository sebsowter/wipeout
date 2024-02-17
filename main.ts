import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { road, roadSegment, roadSpine } from "./src/js/meshes";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

//const controls = new OrbitControls(camera, renderer.domElement);

camera.position.z = 50;

//controls.update();

const [roadMeshes, path] = road();
scene.add(...roadMeshes);

const cameraTarget = new THREE.Object3D();
const lookTarget = new THREE.Object3D();
//const cameraTargetlook = new THREE.Mesh(geometry1, material1);
//scene.add(cameraTargetlook);
let clock = new THREE.Clock();

function updateCamera() {
  const time = clock.getElapsedTime();
  const looptime = 20;
  const t = (time % looptime) / looptime;
  const t2 = ((time + 0.1) % looptime) / looptime;
  const t3 = ((time + 0.101) % looptime) / looptime;

  const pos = path.getPointAt(t);
  const pos2 = path.getPointAt(t2);
  const pos3 = path.getPointAt(t3);

  camera.position.set(pos.x, pos.y, 10);

  //cameraTarget.position.set(pos2.x, pos2.y + 4, 10);
  cube.position.set(pos2.x, pos2.y, 5);
  lookTarget.position.set(pos3.x, pos3.y, 5);

  camera.lookAt(cube.position);

  cube.lookAt(lookTarget.position);
  //cube.rotateOnAxis(new THREE.Vector3(0, 1, 0), Math.PI * -0.5);
}

function animate() {
  requestAnimationFrame(animate);
  updateCamera();
  //controls.update();
  renderer.render(scene, camera);
}

animate();
