import * as THREE from "three";
import { road, roadSpine } from "./src/js/meshes";
import skyleft from "./src/assets/images/sky/skyleft.png";
import skyright from "./src/assets/images/sky/skyright.png";
import skytop from "./src/assets/images/sky/skytop.png";
import skybottom from "./src/assets/images/sky/skybottom.png";
import skyfront from "./src/assets/images/sky/skyfront.png";
import skyback from "./src/assets/images/sky/skyback.png";
import displacement from "./src/assets/images/displacement.png";

enum CameraModes {
  CAMERA,
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

const cameraMode: CameraModes = CameraModes.PLAYER;

const width = 1024;
const height = 2048;
const speed = 0.1;
const rotateSpeed = 0.01;

const createHeightMap = (curve: THREE.CurvePath<THREE.Vector3>) => {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;

  document.body.appendChild(canvas);

  const context = canvas.getContext("2d");
  const points = curve.getSpacedPoints(1000);
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
    context.arc(width / 2 + point.x * 5, height / 2 + point.z * 5, 12, 0, 2 * Math.PI);
    context.fill();
    context.closePath();
  });

  context.getImageData(0, 0, width, height);
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
const cameraPosition = new THREE.Vector3();
const clock = new THREE.Clock();
const spline = roadSpine();
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

let imageData: ImageData = undefined;

const imageTexture = new THREE.TextureLoader().load(displacement, (texture) => {
  const canvas = document.createElement("canvas");
  canvas.width = texture.image.width;
  canvas.height = texture.image.height;

  const context = canvas.getContext("2d");
  context.drawImage(texture.image, 0, 0);

  imageData = context.getImageData(0, 0, canvas.width, canvas.height);
});

function getPositionMap(position: THREE.Vector3) {
  const x = Math.floor(width / 2 + position.x * 5);
  const y = Math.floor(height / 2 + position.z * 5);
  const start = Math.floor(y * width + x) * 4;

  if (imageData) {
    const r = imageData.data[start];
    const b = imageData.data[start + 2];

    if (r === 255 && b === 255) {
      return undefined;
    }

    return (b / 255) * 8.5;
  }

  return undefined;
}

let isUpDown = false;
let isLeftDown = false;
let isRightDown = false;

function onDocumentKeyDown(event) {
  var keyCode = event.which;

  if (keyCode == 87) {
    isUpDown = true;
    // cube.position.y += ySpeed;
  } else if (keyCode == 83) {
    //cube.position.y -= ySpeed;
  } else if (keyCode == 65) {
    isLeftDown = true;
    //cube.position.x -= xSpeed;
  } else if (keyCode == 68) {
    isRightDown = true;
    // cube.position.x += xSpeed;
  } else if (keyCode == 32) {
    //cube.position.set(0, 0, 0);
  }
}

function onDocumentKeyUp(event) {
  var keyCode = event.which;

  if (keyCode == 87) {
    isUpDown = false;
    // cube.position.y += ySpeed;
  } else if (keyCode == 83) {
    // cube.position.y -= ySpeed;
  } else if (keyCode == 65) {
    isLeftDown = false;
    //cube.position.x -= xSpeed;
  } else if (keyCode == 68) {
    isRightDown = false;
    // cube.position.x += xSpeed;
  } else if (keyCode == 32) {
    // cube.position.set(0, 0, 0);
  }
}

function updateCamera() {
  const time = clock.getElapsedTime();
  const looptime = 20;
  const present = (time % looptime) / looptime;
  const future = ((time + 0.001) % looptime) / looptime;

  spline.getPointAt(present, presentPosition);
  spline.getPointAt(future, futurePosition);

  switch (cameraMode) {
    case CameraModes.PLAYER:
      if (isLeftDown) {
        console.log("actor.rotation.y", actor.rotation.y);
        actor.rotateY(rotateSpeed);
        //actor.rotation.z = 0.1;
      } else {
        // actor.rotation.z = 0;
      }

      if (isRightDown) {
        console.log("actor.rotation.y", actor.rotation.y);
        actor.rotateY(-rotateSpeed);
        //actor.rotation.z = -0.1;
      } else {
        //actor.rotation.z = 0;
      }

      if (isUpDown) {
        const direction = new THREE.Vector3();
        actor.getWorldDirection(direction);
        actor.position.add(direction.multiplyScalar(speed));
      }

      const collision = getPositionMap(actor.position);

      if (collision === undefined) {
        console.log("collide!");
      } else {
        actor.position.setY(collision);
      }

      cube2.getWorldPosition(cameraPosition);
      camera.position.copy(cameraPosition);
      camera.quaternion.copy(cube2.getWorldQuaternion(new THREE.Quaternion()));
      break;

    case CameraModes.CAMERA:
      actor.position.copy(presentPosition);
      actor.lookAt(futurePosition);

      cube2.getWorldPosition(cameraPosition);
      camera.position.copy(cameraPosition);
      camera.quaternion.copy(cube2.getWorldQuaternion(new THREE.Quaternion()));
      break;

    case CameraModes.BIRD:
    default:
      actor.position.copy(presentPosition);
      actor.lookAt(futurePosition);

      camera.position.copy(new THREE.Vector3(0, 0, 0).add(new THREE.Vector3(0, 1, 0).multiplyScalar(50)));
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

  const object3d = road(spline);

  scene.add(object3d);
  actor.add(cube);
  actor.add(cube2);
  actor.add(cube1);
  scene.add(actor);
  cube2.lookAt(cube1.position);

  animate();

  if (cameraMode === CameraModes.PLAYER) {
    document.addEventListener("keydown", onDocumentKeyDown, false);
    document.addEventListener("keyup", onDocumentKeyUp, false);
  }
}
