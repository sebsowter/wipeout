import * as THREE from "three";
import { getAxisAngle, road } from "./src/js/meshes";

enum CameraModes {
  PLAYER,
  BIRD,
}

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const cameraMode: CameraModes = CameraModes.PLAYER;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const geometry = new THREE.BoxGeometry(0.5, 0.5, 1);
const geometry2 = new THREE.BoxGeometry(0.5, 0.5, 0.5);

const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const material2 = new THREE.MeshBasicMaterial({ color: 0x0000ff });

const cube = new THREE.Mesh(geometry, material);
const cube1 = new THREE.Mesh(geometry2, material2);
const cube2 = new THREE.Mesh(geometry2, material2);
cube1.position.setZ(-4);
cube1.position.setY(2);
cube2.position.setZ(-2);
cube2.position.setY(1);

const [flows, path] = road(scene);

//scene.add(...flows.map(({ object3D }) => object3D));

const actor = new THREE.Group();
const clock = new THREE.Clock();

actor.add(cube);
actor.add(cube2);
actor.add(cube1);
scene.add(actor);
cube2.lookAt(cube1.position);

// ----------------------------------
const vector10 = new THREE.Vector3();
const vector11 = new THREE.Vector3();
const forward = new THREE.Vector3();
const right = new THREE.Vector3();
const pos1 = new THREE.Vector3();
const pos2 = new THREE.Vector3();
const up = new THREE.Vector3();
const offset = new THREE.Vector3();
const quaternion = new THREE.Quaternion();
const dummy = new THREE.Object3D();

/*
for (let i = 0; i < 999; i++) {
  let p1 = path.getPointAt(i / 1000);
  let p2 = path.getPointAt((i + 1) / 1000);

  const tangent = path.getTangentAt(i / 1000).normalize();
  const [axis, radians] = getAxisAngle(new THREE.Vector3(0, 1, 0), tangent);

  up.set(0, 1, 0);
  forward.subVectors(p1, p2).normalize();
  right.crossVectors(up, forward).normalize();
  up.crossVectors(forward, right);

  // forward
  // debugLine(blue, p1, p1.clone().add(forward));
  // debugLine(blue, p1, p1.clone().add(right));
  // debugLine(blue, p1, p1.clone().add(up));

  // curve.getTangentAt(i / 1000, tangent);
  const angle = Math.atan2(-forward.x, -forward.z);
  //quaternion.setFromAxisAngle(axis, radians);
  quaternion.setFromAxisAngle(up, angle);

  let ah = new THREE.AxesHelper(5);
  ah.position.copy(p1);
  ah.applyQuaternion(quaternion);
  scene.add(ah);
}
*/

function updateCamera() {
  const time = clock.getElapsedTime();
  const looptime = 20;
  const point = (time % looptime) / looptime;
  const t2 = ((time + 0.001) % looptime) / looptime;
  //const t3 = ((time + 0.101) % looptime) / looptime;

  path.getPointAt(point, pos1);
  path.getPointAt(t2, pos2);
  //const tangent = path.getTangentAt(point).normalize();
  //const [axis, radians] = getAxisAngle(new THREE.Vector3(0, 1, 0), tangent);
  //const [axis2, radians2] = getAxisAngle(new THREE.Vector3(1, 0, 0), tangent);

  //path.arcLengthDivisions = 100 / 2;
  //path.updateArcLengths();

  //const points = path.getSpacedPoints(100);
  //const frenetFrames = path.computeFrenetFrames(100, true);

  actor.position.copy(pos1);
  actor.lookAt(pos2);
  //actor.setRotationFromAxisAngle(axis, radians);
  //actor.setRotationFromAxisAngle(axis2, radians2);
  //actor.quaternion.set(actor.quaternion.x, 0, actor.quaternion.z, actor.quaternion.w);
  //console.log("actor.quaternion", actor.quaternion);
  //actor.setRotationFromQuaternion()

  // ----------------------------------

  /*
  path.getPointAt(point, pos1);
  path.getPointAt(t2, pos2);

  up.set(0, 1, 0);
  forward.subVectors(pos1, pos2).normalize();
  right.crossVectors(up, forward).normalize();
  up.crossVectors(forward, right);

  const angle = Math.atan2(-forward.x, -forward.z);
  quaternion.setFromAxisAngle(up, angle);

  dummy.quaternion.setFromAxisAngle(up, angle);
  */

  //actor.rotation.z = (180 * Math.PI) / 180 - dummy.rotation.z;
  //cube.rotation.z = (180 * Math.PI) / 180 - dummy.rotation.z;
  // left side of track
  //vector10.copy(offset.set(-0.2, 0, 0));
  //vector10.applyQuaternion(quaternion);
  //vector10.add(pos1);

  // right side of track
  //vector11.copy(offset.set(0.2, 0, 0));
  //vector11.applyQuaternion(quaternion);
  //vector11.add(pos1);

  //actor.applyQuaternion(quaternion);
  //actor.matrix.lookAt(vector10, vector11, up);

  //actor.quaternion.copy(quaternion);
  //actor.quaternion.setFromRotationMatrix(actor.matrix);
  //actor.setRotationFromAxisAngle(axis, radians);
  //actor.position.copy(pos1);

  // ----------------------------------

  switch (cameraMode) {
    case CameraModes.PLAYER:
      camera.position.copy(cube2.getWorldPosition(new THREE.Vector3()));
      camera.quaternion.copy(cube2.getWorldQuaternion(new THREE.Quaternion()));
      break;

    case CameraModes.BIRD:
    default:
      const cameraPosition = new THREE.Vector3(0, 0, 0).add(new THREE.Vector3(0, 1, 0).multiplyScalar(80));
      camera.position.copy(cameraPosition);
      camera.lookAt(actor.getWorldPosition(new THREE.Vector3()));
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
