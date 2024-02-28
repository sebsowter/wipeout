import * as THREE from "three";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";

import { road, roadSpine } from "./src/js/meshes";
import { createCollisionMap, createHeightMap, pointToPixel } from "./src/js/utils";
import skyleft from "./src/assets/images/sky/skyleft.png";
import skyright from "./src/assets/images/sky/skyright.png";
import skytop from "./src/assets/images/sky/skytop.png";
import skybottom from "./src/assets/images/sky/skybottom.png";
import skyfront from "./src/assets/images/sky/skyfront.png";
import skyback from "./src/assets/images/sky/skyback.png";
import displacement from "./src/assets/images/displacement.png";
import collisionMap from "./src/assets/images/collision.png";
//import craft1 from "./src/assets/models/craft1.obj";

(function () {
  enum CameraMode {
    CAMERA,
    PLAYER,
    BIRD,
    COLLISION_MAP,
    HEIGHT_MAP,
    MAP,
  }

  const cameraMode: CameraMode = CameraMode.PLAYER;
  const width = 1024;
  const height = 2048;
  const speedMax = 0.25;
  const acceleration = 0.001;
  const deceleration = 0.001;
  const turnMax = 0.03;
  const turnAcceleration = 0.0015;
  const turnDeceleration = 0.005;
  const repulsion = new THREE.Vector3();
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

  let heightData: ImageData = undefined;
  let collisionData: ImageData = undefined;
  let isDownDown = false;
  let isUpDown = false;
  let isLeftDown = false;
  let isRightDown = false;
  let speed = 0;
  let rotateSpeed = 0;
  let model: THREE.Object3D = undefined;

  new THREE.TextureLoader().load(displacement, (texture) => {
    const canvas = document.createElement("canvas");
    canvas.width = texture.image.width;
    canvas.height = texture.image.height;

    const context = canvas.getContext("2d");
    context.drawImage(texture.image, 0, 0);

    heightData = context.getImageData(0, 0, canvas.width, canvas.height);
  });

  new THREE.TextureLoader().load(collisionMap, (texture) => {
    const canvas = document.createElement("canvas");
    canvas.width = texture.image.width;
    canvas.height = texture.image.height;

    const context = canvas.getContext("2d");
    context.drawImage(texture.image, 0, 0);

    collisionData = context.getImageData(0, 0, canvas.width, canvas.height);
  });

  const loader = new OBJLoader();
  loader.load("./src/assets/models/craft1.obj", function (object: THREE.Object3D) {
    const material = new THREE.MeshBasicMaterial({
      color: 0x808080,
    });

    object.traverse(function (child) {
      if (child instanceof THREE.Mesh) {
        child.material = material;
      }
    });
    object.scale.multiplyScalar(0.075);
    object.position.setY(0.3);

    model = object;

    actor.add(object);
  });

  function getCollision(heightData: ImageData, position: THREE.Vector3, rotationY: THREE.Vector3): [number, number] {
    const pixel = getPixel(heightData, new THREE.Vector2(position.x, position.z));
    const direction = new THREE.Vector2(rotationY.x, rotationY.z);
    const angle = direction.angle();

    if (pixel) {
      const [r] = pixel;

      if (r === 255) {
        const repulsionVLeft = new THREE.Vector2(4, 0).rotateAround(new THREE.Vector2(0, 0), angle - Math.PI / 2);
        const repulsionVRight = new THREE.Vector2(4, 0).rotateAround(new THREE.Vector2(0, 0), angle + Math.PI / 2);

        const [left] = getPixel(
          heightData,
          new THREE.Vector2(repulsionVLeft.x, repulsionVLeft.y).add(new THREE.Vector2(position.x, position.z))
        );
        const [right] = getPixel(
          heightData,
          new THREE.Vector2(repulsionVRight.x, repulsionVRight.y).add(new THREE.Vector2(position.x, position.z))
        );

        return [left / 255, right / 255];
      }
    }

    return undefined;
  }

  function getHeight(heightData: ImageData, position: THREE.Vector3, min = 0, max = 8.5) {
    const pixel = getPixel(heightData, new THREE.Vector2(position.x, position.z));

    if (pixel) {
      const [r, _, b] = pixel;

      if (r === 255 && b === 255) {
        return min;
      }

      return (b / 255) * (max - min);
    }

    return min;
  }

  function getPixel(heightData: ImageData, position: THREE.Vector2) {
    const pixel = pointToPixel(position.x, position.y, width, height);
    const start = Math.floor(pixel.y * width + pixel.x) * 4;

    if (heightData) {
      const r = heightData.data[start];
      const g = heightData.data[start + 1];
      const b = heightData.data[start + 2];

      return [r, g, b];
    }

    return undefined;
  }

  function onDocumentKeyDown(event) {
    const keyCode = event.which;

    if (keyCode == 87) {
      isUpDown = true;
    } else if (keyCode == 83) {
      isDownDown = true;
    } else if (keyCode == 65) {
      isLeftDown = true;
    } else if (keyCode == 68) {
      isRightDown = true;
    } else if (keyCode == 32) {
      isDownDown = true;
    }
  }

  function onDocumentKeyUp(event) {
    const keyCode = event.which;

    if (keyCode == 87) {
      isUpDown = false;
    } else if (keyCode == 83) {
      isDownDown = false;
    } else if (keyCode == 65) {
      isLeftDown = false;
    } else if (keyCode == 68) {
      isRightDown = false;
    } else if (keyCode == 32) {
      isDownDown = false;
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
      case CameraMode.PLAYER:
        const direction = new THREE.Vector3();
        actor.getWorldDirection(direction);

        // Handle stearing
        if (isLeftDown) {
          rotateSpeed = Math.min(rotateSpeed + turnAcceleration, turnMax);
        } else if (isRightDown) {
          rotateSpeed = Math.max(rotateSpeed - turnAcceleration, -turnMax);
        } else if (rotateSpeed > 0) {
          rotateSpeed = Math.max(rotateSpeed - turnDeceleration, 0);
        } else if (rotateSpeed < 0) {
          rotateSpeed = Math.min(rotateSpeed + turnDeceleration, 0);
        }

        if (Math.abs(rotateSpeed)) {
          actor.rotateY(rotateSpeed);

          if (model) {
            model.rotation.z = -rotateSpeed * 15;
          }
        }

        // Handle acceleration
        if (isUpDown) {
          speed = Math.min(speed + acceleration, speedMax);
        } else {
          speed = Math.max(speed - deceleration, 0);
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
            energy.z += -repulsionAmount * 2;
            speed *= 0.25;
          }

          repulsion.copy(energy.applyEuler(actor.rotation));
        } else {
          repulsion.lerp(new THREE.Vector3(), 0.1);
        }

        // Update objects
        const y = getHeight(heightData, actor.position, 0, 8.5);
        actor.position.add(direction.multiplyScalar(speed)).add(repulsion);
        actor.position.lerp(actor.position.clone().setY(y), 0.25);

        cube2.getWorldPosition(cameraPosition);
        camera.position.copy(cameraPosition);
        camera.quaternion.copy(cube2.getWorldQuaternion(new THREE.Quaternion()));
        break;

      case CameraMode.CAMERA:
        actor.position.copy(presentPosition);
        actor.lookAt(futurePosition);

        cube2.getWorldPosition(cameraPosition);
        camera.position.copy(cameraPosition);
        camera.quaternion.copy(cube2.getWorldQuaternion(new THREE.Quaternion()));
        break;

      case CameraMode.BIRD:
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

  function init() {
    if (cameraMode === CameraMode.COLLISION_MAP) {
      createCollisionMap(spline, width, height);
    } else if (cameraMode === CameraMode.HEIGHT_MAP) {
      createHeightMap(spline, width, height);
    } else {
      document.body.appendChild(renderer.domElement);

      scene.background = new THREE.CubeTextureLoader().load([skyright, skyleft, skytop, skybottom, skyfront, skyback]);
      //scene.background.minFilter = THREE.NearestFilter;
      //scene.background.magFilter = THREE.NearestFilter;
      cube1.position.setZ(-1.5);
      cube1.position.setY(1);
      cube2.position.setZ(-0.7);
      cube2.position.setY(0.75);

      const object3d = road(spline);

      scene.add(object3d);
      actor.add(cube);
      actor.add(cube2);
      actor.add(cube1);
      scene.add(actor);
      cube2.lookAt(cube1.position);

      animate();

      if (cameraMode === CameraMode.PLAYER) {
        document.addEventListener("keydown", onDocumentKeyDown, false);
        document.addEventListener("keyup", onDocumentKeyUp, false);
      }
    }
  }

  init();
})();
