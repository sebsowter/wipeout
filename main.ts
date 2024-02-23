import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { road, roadSegment, roadSpine } from "./src/js/meshes";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
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
  const t2 = ((time + 0.1) % looptime) / looptime;
  const t3 = ((time + 0.101) % looptime) / looptime;

  const pos = path.getPointAt(t);
  const pos2 = path.getPointAt(t2);
  // const pos3 = path.getPointAt(t3);

  const tangent = path.getTangent(t).normalize();

  const axis = tangent; // .crossVectors(new THREE.Vector3(0, 0, 1), tangent).normalize();

  actor.position.copy(pos);

  const radians = Math.acos(new THREE.Vector3(0, 0, 1).dot(tangent));

  actor.quaternion.setFromAxisAngle(axis, radians);

  //const angle = actor.position.angleTo(lookTarget.position);
  //console.log("angle", angle);

  //actor.getWorldQuaternion()

  // const quaternion = new THREE.Quaternion();
  //quaternion.set;
  //quaternion.setFromAxisAngle(new THREE.Vector3(0, 0, 1), tangent.y);
  //console.log("x", tangent.x);
  console.log("y", tangent.y);

  // actor.setRotationFromQuaternion(quaternion);
  //actor.lookAt(new THREE.Vector3(pos.x, pos.y, -10));
  //actor.applyQuaternion(quaternion);

  //actor.applyQuaternion(quaternion)

  //const offset = new THREE.Vector3(0, 0, Math.PI / 2).applyQuaternion(quaternion);
  //.applyAxisAngle(new THREE.Vector3(0, 0, 1).normalize(), actor.rotation.z);
  //const vectorss = vector.add(offset);
  //camera.setRotationFromAxisAngle()
  //const ss = actor.position.clone().add(cameraTarget.position);
  //camera.position.set(ss.x, ss.y, ss.z);
  //camera.applyQuaternion(quaternion); // Apply Quaternion

  // camera.quaternion.normalize(); // Normalize Quaternion
  //camera.rotateOnAxis(new THREE.Vector3(0, 1, 0), 0);
  //camera.rotateOnAxis(new THREE.Vector3(1, 0, 1), 0);

  // this.dir.set(0, 0, 1);
  // this.up.set(0, 1, 0);

  //this.targetObject.matrix.rotateAxis(this.up);
  //this.targetObject.matrix.rotateAxis(this.dir);

  //this.speedOffset += (this.speedOffsetMax * ratio - this.speedOffset) * Math.min(1, 0.3 * dt);

  const pos22 = actor.position.clone();
  //this.target.copy(this.targetObject.position);
  //this.target.subSelf(this.dir.multiplyScalar(this.zoffset + this.speedOffset));
  //pos22.add(new THREE.Vector3(0, 1, 0).multiplyScalar(5).applyQuaternion());
  pos22.add(new THREE.Vector3(0, 0, 1).multiplyScalar(20));
  //this.target.y += -this.up.y + this.yoffset;
  camera.position.copy(pos22);

  camera.lookAt(actor.position);
}

function animate() {
  requestAnimationFrame(animate);
  updateCamera();
  //controls.update();
  renderer.render(scene, camera);
}

animate();
