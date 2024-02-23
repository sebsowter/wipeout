import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { road, roadSegment, roadSpine } from "./src/js/meshes";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 0.5, 1);
const geometry2 = new THREE.BoxGeometry(0.5, 0.5, 0.5);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const material2 = new THREE.MeshBasicMaterial({ color: 0x0000ff });
const cube = new THREE.Mesh(geometry, material);
const cube2 = new THREE.Mesh(geometry2, material2);
cube2.position.setY(2);

//const controls = new OrbitControls(camera, renderer.domElement);

camera.position.z = 100;

//controls.update();

const [roadMeshes, path] = road();
scene.add(...roadMeshes);

const actor = new THREE.Group();
let clock = new THREE.Clock();

actor.add(cube);
actor.add(cube2);

scene.add(actor);

function updateCamera() {
  const time = clock.getElapsedTime();
  const looptime = 20;
  const t = (time % looptime) / looptime;
  //const t2 = ((time + 0.1) % looptime) / looptime;
  //const t3 = ((time + 0.101) % looptime) / looptime;

  const position = path.getPointAt(t);
  const tangent = path.getTangent(t).normalize();

  const up = new THREE.Vector3(0, 1, 0);
  const axis = new THREE.Vector3().crossVectors(up, tangent).normalize();
  const radians = Math.acos(up.dot(tangent));

  actor.position.copy(position);
  actor.quaternion.setFromAxisAngle(axis, radians);

  const cameraPosition = actor.position.clone();
  cameraPosition.add(new THREE.Vector3(0, 0, 1).multiplyScalar(20));

  camera.position.copy(cameraPosition);
  camera.lookAt(actor.position);
}

function animate() {
  requestAnimationFrame(animate);
  updateCamera();
  //controls.update();
  renderer.render(scene, camera);
}

animate();
