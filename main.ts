import * as THREE from "three";
import { FBXLoader } from "three/addons/loaders/FBXLoader.js";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";

import { OrbitControls } from "three/addons/controls/OrbitControls.js";

import { getTerrain, road, roadSpine } from "./src/js/meshes";
import { createCollisionMap, createHeightMap, pointToPixel } from "./src/js/utils";
import skyleft from "./src/assets/images/sky/skyleft.png";
import skyright from "./src/assets/images/sky/skyright.png";
import skytop from "./src/assets/images/sky/skytop.png";
import skybottom from "./src/assets/images/sky/skybottom.png";
import skyfront from "./src/assets/images/sky/skyfront.png";
import skyback from "./src/assets/images/sky/skyback.png";
import displacement from "./src/assets/images/displacement.png";
import collisionMap from "./src/assets/images/collision.png";
import terrain from "./src/assets/images/terrain.png";
import ship from "./src/assets/images/ship.png";

(function () {
  enum CameraMode {
    CAMERA,
    ORBIT,
    PLAYER,
    BIRD,
    COLLISION_MAP,
    HEIGHT_MAP,
    MAP,
  }

  const cameraMode: CameraMode = CameraMode.PLAYER;
  const width = 1024;
  const height = 2048;
  const speedMax = 0.3;
  const acceleration = 0.001;
  const deceleration = 0.001;
  const turnMax = 0.04;
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
  const tilt = new THREE.Vector2();
  const clock = new THREE.Clock();
  const curve = roadSpine();
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  const controls = new OrbitControls(camera, renderer.domElement);

  scene.background = new THREE.CubeTextureLoader().load([skyright, skyleft, skytop, skybottom, skyfront, skyback]);
  //scene.background.minFilter = THREE.NearestFilter;
  //scene.background.magFilter = THREE.NearestFilter;
  cube1.position.setZ(-1.5);
  cube1.position.setY(1);
  cube2.position.setZ(-0.5);
  cube2.position.setY(0.75);

  scene.add(road(curve));
  //actor.add(cube);
  actor.add(cube2);
  actor.add(cube1);
  scene.add(actor);
  // const ss = ship();
  //ss.position.setY(0.4);
  //actor.add(ss);
  cube2.lookAt(cube1.position);
  actor.rotateY(Math.PI);

  let heightData: ImageData = undefined;
  let collisionData: ImageData = undefined;
  let isDownDown = false;
  let isUpDown = false;
  let isLeftDown = false;
  let isRightDown = false;
  let speed = 0;
  let rotateSpeed = 0;
  const model = new THREE.Object3D();
  actor.add(model);

  const light = new THREE.AmbientLight(0x404040); // soft white light
  scene.add(light);

  new THREE.TextureLoader().load(terrain, function (texture) {
    const canvas = document.createElement("canvas");
    canvas.width = texture.image.width;
    canvas.height = texture.image.height;

    const context = canvas.getContext("2d");
    context.drawImage(texture.image, 0, 0);

    const terrain = getTerrain(context.getImageData(0, 0, canvas.width, canvas.height));

    scene.add(terrain);
  });
  const textureShip = new THREE.TextureLoader().load(ship);
  textureShip.minFilter = THREE.NearestFilter;
  textureShip.magFilter = THREE.NearestFilter;

  new THREE.TextureLoader().load(displacement, function (texture) {
    const canvas = document.createElement("canvas");
    canvas.width = texture.image.width;
    canvas.height = texture.image.height;

    const context = canvas.getContext("2d");
    context.drawImage(texture.image, 0, 0);

    heightData = context.getImageData(0, 0, canvas.width, canvas.height);
  });

  new THREE.TextureLoader().load(collisionMap, function (texture) {
    const canvas = document.createElement("canvas");
    canvas.width = texture.image.width;
    canvas.height = texture.image.height;

    const context = canvas.getContext("2d");
    context.drawImage(texture.image, 0, 0);

    collisionData = context.getImageData(0, 0, canvas.width, canvas.height);
  });

  const loader = new OBJLoader();
  loader.load("./models/model.obj", function (object) {
    console.log("object", object);
    const material2 = new THREE.MeshBasicMaterial({
      color: 0x808080,
      side: THREE.DoubleSide,
    });

    let mesh: THREE.Mesh = undefined;
    object.traverse(function (child) {
      if (child instanceof THREE.Mesh) {
        mesh = child;
        //child.material = material;
        //child.material.texture.minFilter = THREE.NearestFilter;
        //child.material.magFilter = THREE.NearestFilter;
        // child.geometry.computeVertexNormals();
      }
    });

    if (mesh) {
      //mesh.material.side = THREE.DoubleSide;
      mesh.scale.multiplyScalar(0.005);
      mesh.rotateY(Math.PI);
      mesh.position.setY(0.3);
      mesh.position.setZ(0.5);

      const loader2 = new THREE.MaterialLoader();

      // load a resource
      loader2.load(
        // resource URL
        "./models/material.json",

        // onLoad callback
        function (material: THREE.MeshBasicMaterial) {
          material.map = textureShip;
          material.color = new THREE.Color(0xcccccc);
          material.side = THREE.DoubleSide;
          mesh.material = material;
        },

        // onProgress callback
        function (xhr) {
          console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
        },

        // onError callback
        function (err) {
          console.log("An error happened");
        }
      );

      model.add(mesh);
    }
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

    curve.getPointAt(present, presentPosition);
    curve.getPointAt(future, futurePosition);

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

          model.rotation.z = -rotateSpeed * 15;
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

        // Handle tiltconst direction = new THREE.Vector2(rotationY.x, rotationY.z);

        const y = getHeight(heightData, actor.position, 0, 8.5);
        const direction2 = new THREE.Vector2(direction.x, direction.z);
        const angle = direction2.angle();
        const forwardVector = new THREE.Vector2(2, 0).rotateAround(new THREE.Vector2(0, 0), angle);
        const forwardPosition = actor.position.clone().add(new THREE.Vector3(forwardVector.x, 0, forwardVector.y));
        const forwardHeight = getHeight(heightData, forwardPosition, 0, 8.5);

        tilt.copy(new THREE.Vector2(2, y - forwardHeight));

        if (model) {
          //model.rotation.x = tilt.angle() * 0.5;
        }

        /*
        if (forwardHeight >) {
          if () {

          }
          // repulsion.copy(energy.applyEuler(actor.rotation));
        } else {
          //repulsion.lerp(new THREE.Vector3(), 0.1);
        }
        */

        // Update objects
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
        actor.position.copy(presentPosition);
        actor.lookAt(futurePosition);

        camera.position.copy(new THREE.Vector3(0, 0, 0).add(new THREE.Vector3(0, 1, 0).multiplyScalar(50)));
        camera.lookAt(actor.getWorldPosition(new THREE.Vector3()));
        break;

      case CameraMode.ORBIT:
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
    switch (cameraMode) {
      case CameraMode.COLLISION_MAP:
        createCollisionMap(curve, width, height);
        break;

      case CameraMode.HEIGHT_MAP:
        createHeightMap(curve, width, height);
        break;

      case CameraMode.ORBIT:
        document.body.appendChild(renderer.domElement);
        camera.position.set(0, 2, 4);
        controls.update();

        animate();
        break;

      case CameraMode.PLAYER:
        document.addEventListener("keydown", onDocumentKeyDown, false);
        document.addEventListener("keyup", onDocumentKeyUp, false);

      default:
        document.body.appendChild(renderer.domElement);

        animate();
        break;
    }

    window.addEventListener("resize", onWindowResize, false);
  }

  init();
})();
