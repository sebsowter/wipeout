import gsap from "gsap";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

import { getCollisionMap, getHeightMap, getRoadCurve, road } from "./meshes";
import { createCollisionMap, createHeightMap, getCollision, getHeight, getPixel, getTimeString } from "./utils";
import { Actor } from "./Actor";
import { Terrain } from "./Terrain";
import { Keys } from "./Keys";
import skyleft from "../assets/images/sky/skyleft.png";
import skyright from "../assets/images/sky/skyright.png";
import skytop from "../assets/images/sky/skytop.png";
import skybottom from "../assets/images/sky/skybottom.png";
import skyfront from "../assets/images/sky/skyfront.png";
import skyback from "../assets/images/sky/skyback.png";

export const SPEED_BOOST = 0.4;
export const SPEED_MAX = 0.325;
export const SPEED_ACCELERATION = 0.001;
export const SPEED_DECELERATION = 0.002;

export const TURN_MAX = 0.04;
export const TURN_ACCELERATION = 0.002;
export const TURN_DECELERATION = 0.005;

export const HEIGHT_MIN = 0;
export const HEIGHT_MAX = 8.5;

export type CameraMode = "camera" | "orbit" | "player" | "bird" | "collision_map" | "height_map" | "map";

export class Wipeout {
  public actor: Actor;
  public camera: THREE.PerspectiveCamera;
  public cameraMode: CameraMode = "camera";
  public checkpoint = false;
  public clock: THREE.Clock;
  public collisionMap: ImageData;
  public controls: OrbitControls;
  public curve: THREE.CurvePath<THREE.Vector3>;
  public document: Document;
  public heightMap: ImageData;
  public hud: HTMLDivElement;
  public isControllable = false;
  public keys: Keys;
  public lapTime = 0;
  public lapTimeStart = 0;
  public lapTimeElements: HTMLParagraphElement[];
  public lapTimes = [0, 0, 0];
  public renderer: THREE.WebGLRenderer;
  public repulsion = new THREE.Vector3();
  public rotationY = 0;
  public scene: THREE.Scene;
  public speed = 0;
  public speedPrevious = 0;
  public timeElement: HTMLParagraphElement;
  public ui: HTMLDivElement;
  public uiBottom: HTMLDivElement;
  public uiBottom2: HTMLDivElement;
  public uiTop: HTMLDivElement;
  public hudTimes: HTMLDivElement;

  constructor(document: Document, width: number, height: number) {
    const heading1 = document.createElement("h3");
    heading1.innerText = "LAP TIME";

    const heading2 = document.createElement("h3");
    heading2.innerText = "LAP RECORD";
    heading2.style.top = "10rem";

    const button = document.createElement("button");
    button.innerText = "PLAY";
    button.onclick = () => {
      this.setCameraMode("player");
    };

    this.uiBottom = document.createElement("div");
    this.uiBottom.className = "ui-bottom";
    this.uiBottom.appendChild(button);

    this.uiTop = document.createElement("div");
    this.uiTop.className = "ui-top";

    this.ui = document.createElement("div");
    this.ui.className = "ui";

    this.hud = document.createElement("div");
    this.hud.className = "hud";

    this.hudTimes = document.createElement("div");
    this.hudTimes.className = "hud-times";

    const button2 = document.createElement("button");
    button2.innerText = "QUIT";
    button2.onclick = () => {
      this.setCameraMode("camera");
    };

    this.uiBottom2 = document.createElement("div");
    this.uiBottom2.className = "ui-bottom2";
    this.uiBottom2.appendChild(button2);

    this.timeElement = document.createElement("p");
    this.timeElement.className = "time-large";

    this.hudTimes.appendChild(heading1);
    this.hudTimes.appendChild(heading2);
    this.hudTimes.appendChild(this.timeElement);
    this.hudTimes.appendChild(this.uiBottom2);

    gsap.set(this.hud, { x: -1000 });

    this.hud.appendChild(this.hudTimes);
    this.hud.appendChild(this.uiBottom2);

    this.ui.appendChild(this.uiTop);
    this.ui.appendChild(this.uiBottom);

    this.lapTimeElements = this.lapTimes.map((time, index) => {
      const element = document.createElement("p");
      element.className = "time-small";
      element.innerText = `${index + 1}. ${getTimeString(time)}`;
      element.style.top = `${12.4 + index * 2.4}rem`;

      this.hudTimes.appendChild(element);

      return element;
    });

    this.setLapTime(this.lapTime);
    this.document = document;
    this.document.body.appendChild(this.ui);
    this.document.body.appendChild(this.hud);
    this.actor = new Actor();
    this.clock = new THREE.Clock();
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(100, width / height, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(width, height);
    this.scene.background = new THREE.CubeTextureLoader().load([
      skyright,
      skyleft,
      skytop,
      skybottom,
      skyfront,
      skyback,
    ]);
    this.scene.background.minFilter = THREE.NearestFilter;
    this.scene.background.magFilter = THREE.NearestFilter;
    this.curve = getRoadCurve();
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.keys = new Keys();
    this.loadHeightMap();
    this.loadCollisionMap();
    this.init();
  }

  private loadCollisionMap() {
    getCollisionMap().then((imageData) => {
      this.collisionMap = imageData;
    });
  }

  private loadHeightMap() {
    getHeightMap().then((imageData) => {
      this.heightMap = imageData;
    });
  }

  private init() {
    const manager = new THREE.LoadingManager();

    this.document.body.appendChild(this.renderer.domElement);

    this.scene.add(new Terrain());
    this.scene.add(road(this.curve));
    this.scene.add(this.actor);
    this.actor.position.set(16, 0, 0);

    if (this.cameraMode === "orbit") {
      this.camera.position.set(16, 2, 4);
      this.controls.update();
    }
  }

  public resize(width: number, height: number) {
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  public update() {
    const time = this.clock.getElapsedTime();
    const looptime = 20;
    const present = (time % looptime) / looptime;
    const future = ((time + 0.001) % looptime) / looptime;
    const presentPosition = new THREE.Vector3();
    const futurePosition = new THREE.Vector3();

    this.curve.getPointAt(present, presentPosition);
    this.curve.getPointAt(future, futurePosition);

    if (this.cameraMode === "player") {
      if (this.isControllable) {
        this.setLapTime(time - this.lapTimeStart);
        this.updateStearing();
      }

      const direction3 = new THREE.Vector3();

      this.actor.getWorldDirection(direction3);

      const direction2 = new THREE.Vector2(direction3.x, direction3.z);
      const angle = direction2.angle();

      const forward2 = new THREE.Vector2(2, 0).rotateAround(new THREE.Vector2(0, 0), angle);
      const forward3 = this.actor.position.clone().add(new THREE.Vector3(forward2.x, 0, forward2.y));

      const previousY = getHeight(this.heightMap, this.actor.position, HEIGHT_MIN, HEIGHT_MAX);
      const currentY = getHeight(this.heightMap, forward3, HEIGHT_MIN, HEIGHT_MAX);

      const deltaY = previousY - currentY;
      const deltaSpeed = this.speed - this.speedPrevious;

      const modelQuaternion = new THREE.Quaternion();
      modelQuaternion
        .setFromEuler(this.actor.model.rotation.clone())
        .slerp(
          new THREE.Quaternion().setFromEuler(
            new THREE.Euler(
              Math.PI + 0.1 + deltaY * 1 + deltaSpeed * 30,
              -this.rotationY * 5,
              Math.PI + this.rotationY * 30
            )
          ),
          0.1
        );

      const cameraQuaternion = new THREE.Quaternion();
      cameraQuaternion
        .setFromEuler(this.actor.cameraPosition.rotation.clone())
        .slerp(
          new THREE.Quaternion().setFromEuler(
            new THREE.Euler(
              this.actor.cameraPosition.rotation.x,
              this.actor.cameraPosition.rotation.y,
              Math.PI + this.rotationY * 5
            )
          ),
          0.25
        );

      if (this.isControllable) {
        this.updateThrottle();
        this.updateCollision(direction3);
      }

      this.updateLap();

      this.actor.rotateY(this.rotationY);
      this.actor.cameraPosition.rotation.setFromQuaternion(cameraQuaternion);
      this.actor.model.rotation.setFromQuaternion(modelQuaternion);
      this.actor.shadow.rotation.y = -this.rotationY * 5;
      this.actor.position.add(direction3.multiplyScalar(this.speed)).add(this.repulsion);
      this.actor.position.lerp(this.actor.position.clone().setY(previousY), 0.25);

      this.updateCamera();
    } else if (this.cameraMode === "camera") {
      this.actor.position.copy(presentPosition);
      this.actor.lookAt(futurePosition);

      this.updateCamera();
    } else if (this.cameraMode === "orbit") {
      this.controls.update();
    }

    this.renderer.render(this.scene, this.camera);
  }

  private endLap() {
    this.lapTimes = this.lapTimes.reduce((acc, current) => {
      if (this.lapTime < current) {
        return [...acc, this.lapTime, current];
      }

      return [...acc, current];
    }, []);
    this.lapTimeStart = this.clock.getElapsedTime();
  }

  private setLapTime(time: number) {
    this.lapTime = time;
    this.timeElement.innerHTML = getTimeString(time);
  }

  private updateCamera() {
    this.camera.position.copy(this.actor.cameraPosition.getWorldPosition(new THREE.Vector3()));
    this.camera.quaternion.copy(this.actor.cameraPosition.getWorldQuaternion(new THREE.Quaternion()));
  }

  private updateLap() {
    const pixel = getPixel(this.collisionMap, new THREE.Vector2(this.actor.position.x, this.actor.position.z), 8);

    if (pixel) {
      const [r, g, b] = pixel;

      if (r === 0) {
        if (g === 255 && this.checkpoint) {
          this.checkpoint = false;
          this.endLap();
        }

        if (b === 255 && !this.checkpoint) {
          this.checkpoint = true;
        }
      } else if (r === 255 && g === 0) {
        this.speed = SPEED_BOOST;
      }
    }
  }

  private updateCollision(direction: THREE.Vector3) {
    const collision = getCollision(this.collisionMap, this.actor.position, direction);

    if (collision) {
      const repulsion = new THREE.Vector3();
      const repulsionAmount = Math.max(this.speed, 0.01);
      const [left, right] = collision;

      if (right > left) {
        repulsion.x += repulsionAmount;

        this.speedPrevious = this.speed;
        this.speed *= 0.5;
      } else if (right < left) {
        repulsion.x += -repulsionAmount;

        this.speedPrevious = this.speed;
        this.speed *= 0.5;
      } else {
        repulsion.z += -repulsionAmount;

        this.speedPrevious = this.speed;
        this.speed *= 0.25;
      }

      this.repulsion.copy(repulsion.applyEuler(this.actor.rotation));
    } else {
      this.repulsion.lerp(new THREE.Vector3(), 0.1);
    }
  }

  private updateThrottle() {
    if (this.keys.isUpDown) {
      this.speedPrevious = this.speed;
      this.speed = Math.min(this.speed + SPEED_ACCELERATION, SPEED_MAX);
    } else if (this.keys.isDownDown) {
      this.speedPrevious = this.speed;
      this.speed = Math.max(this.speed - SPEED_ACCELERATION, -SPEED_MAX / 2);
    } else {
      this.speedPrevious = this.speed;
      this.speed = Math.max(this.speed - SPEED_DECELERATION, 0);
    }
  }

  private updateStearing() {
    if (this.keys.isLeftDown && this.keys.isRightDown) {
      if (this.rotationY > 0) {
        this.rotationY = Math.max(this.rotationY - TURN_DECELERATION, 0);
      } else if (this.rotationY < 0) {
        this.rotationY = Math.min(this.rotationY + TURN_DECELERATION, 0);
      }
    } else if (this.keys.isLeftDown) {
      this.rotationY = Math.min(this.rotationY + TURN_ACCELERATION, TURN_MAX);
    } else if (this.keys.isRightDown) {
      this.rotationY = Math.max(this.rotationY - TURN_ACCELERATION, -TURN_MAX);
    } else if (this.rotationY > 0) {
      this.rotationY = Math.max(this.rotationY - TURN_DECELERATION, 0);
    } else if (this.rotationY < 0) {
      this.rotationY = Math.min(this.rotationY + TURN_DECELERATION, 0);
    }
  }

  public setCameraMode(value: CameraMode) {
    if (value === "player" && this.cameraMode !== "player") {
      this.reset();
      this.cameraMode = value;
      this.isControllable = false;

      gsap
        .timeline({
          onComplete: () => {
            this.countdown();
          },
        })
        .to(this.uiBottom, { y: "100%", duration: 1 })
        .to(this.uiTop, { y: "-100%", duration: 1 }, 0)
        .to(this.hud, { x: 0, duration: 0.25 });
    }

    if (value === "camera" && this.cameraMode !== "camera") {
      this.isControllable = false;

      gsap
        .timeline({
          onComplete: () => {
            this.cameraMode = value;
          },
        })
        .to(this.hud, { x: -1000, duration: 0.5 })
        .to(this.uiBottom, { y: "0", duration: 1 })
        .to(this.uiTop, { y: "0", duration: 1 }, 0.5);
    }
  }

  public reset() {
    this.rotationY = 0;
    this.speed = 0;
    this.speedPrevious = 0;
    this.repulsion.copy(new THREE.Vector3());
    this.actor.position.set(16, 0, 0);
    this.actor.rotation.set(0, Math.PI, 0);
    this.actor.model.rotation.set(0, Math.PI, 0);
    this.actor.shadow.rotation.y = 0;
    this.setLapTime(0);
  }

  public countdown() {
    setTimeout(() => {
      this.lapTimeStart = this.clock.getElapsedTime();
      this.isControllable = true;
    }, 3000);
  }
}
