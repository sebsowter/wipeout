import gsap from "gsap";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";

import { getMap, getRoadCurve, road } from "./meshes";
import { createCollisionMap, createHeightMap, getCollision, getHeight, getPixel } from "./utils";
import { Actor } from "./Actor";
import { Terrain } from "./Terrain";
import { Keys } from "./Keys";
import { Lights } from "./Lights";
import { TimeElement } from "./TimeElement";
import { TimeItemElement } from "./TimeItemElement";
import { audio, skybox, textures } from "./assets";

export const SPEED_MAX = 0.33;
export const SPEED_BOOST_MAX = 0.5;
export const SPEED_BOOST_ACCELERATION = SPEED_BOOST_MAX - SPEED_MAX;
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
  public audioListener: THREE.AudioListener;
  public camera: THREE.PerspectiveCamera;
  public cameraMode: CameraMode = "camera";
  public checkpoint = false;
  public clock: THREE.Clock;
  public collisionMap: ImageData;
  public controls: OrbitControls;
  public curve: THREE.CurvePath<THREE.Vector3>;
  public document: Document;
  public environment: THREE.Object3D;
  public heightMap: ImageData;
  public hud: HTMLDivElement;
  public hudData: HTMLDivElement;
  public hudTimes: HTMLDivElement;
  public isControllable = false;
  public isLoaded = false;
  public keys: Keys;
  public lapTime = 0;
  public lapTimeStart = 0;
  public lapTimeElements: TimeItemElement[];
  public lapTimes: number[] = [];
  public lights: Lights;
  public material: THREE.MeshBasicMaterial;
  public model: THREE.Object3D;
  public renderer: THREE.WebGLRenderer;
  public repulsion = new THREE.Vector3();
  public rotationY = 0;
  public scene: THREE.Scene;
  public speed = 0;
  public speedPrevious = 0;
  public timeElement: TimeElement;
  public ui: HTMLDivElement;
  public uiBottom: HTMLDivElement;
  public uiBottom2: HTMLDivElement;
  public uiTop: HTMLDivElement;
  public textures: {
    [key: string]: THREE.Texture;
  } = {};
  public audio: {
    [key: string]: THREE.Audio;
  } = {};

  constructor(document: Document, width: number, height: number) {
    const heading1 = document.createElement("h3");
    heading1.innerText = "LAP TIME";

    const heading2 = document.createElement("h3");
    heading2.innerText = "LAP RECORD";

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

    this.hudData = document.createElement("div");
    this.hudData.className = "hud-data";

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

    this.timeElement = new TimeElement(0);

    this.hudData.appendChild(heading1);
    this.hudData.appendChild(this.timeElement.container);
    this.hudData.appendChild(this.uiBottom2);
    this.hudData.appendChild(this.hudTimes);
    this.hudTimes.appendChild(heading2);

    gsap.set(this.hud, { x: "-100%" });
    gsap.set(this.hudTimes, { x: "-50rem" });

    this.hud.appendChild(this.hudData);
    this.hud.appendChild(this.uiBottom2);

    this.ui.appendChild(this.uiTop);
    this.ui.appendChild(this.uiBottom);

    this.lapTimeElements = Array.from(Array(3)).map((_, index) => {
      const time = this.lapTimes[index];
      const element = new TimeItemElement(time, index);

      if (time) {
        element.setValue(time);
      }

      return element;
    });

    this.lapTimeElements.forEach((element) => {
      this.hudTimes.appendChild(element.container);
    });

    this.document = document;
    this.document.body.appendChild(this.ui);
    this.document.body.appendChild(this.hud);

    this.clock = new THREE.Clock();
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(100, width / height, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(width, height);
    this.curve = getRoadCurve();
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.keys = new Keys();
    this.audioListener = new THREE.AudioListener();
    this.camera.add(this.audioListener);

    this.preload();
  }

  private preload() {
    const manager = new THREE.LoadingManager();
    manager.onLoad = () => this.init();

    /*
    manager.onStart = (url, itemsLoaded, itemsTotal) => {
      console.log("Started loading file: " + url + ".\nLoaded " + itemsLoaded + " of " + itemsTotal + " files.");
    };
    manager.onProgress = (url, itemsLoaded, itemsTotal) => {
      console.log("Loading file: " + url + ".\nLoaded " + itemsLoaded + " of " + itemsTotal + " files.");
    };
    manager.onError = (url) => {
      console.log("There was an error loading " + url);
    };
    */

    this.textures = Object.entries(textures).reduce((object, [key, value]) => {
      const texture = new THREE.TextureLoader(manager).load(value);
      texture.minFilter = THREE.NearestFilter;
      texture.magFilter = THREE.NearestFilter;

      return { ...object, [key]: texture };
    }, {});

    Object.entries(audio).forEach(([key, value]) => {
      return new THREE.AudioLoader(manager).load(value, (audioBuffer) => {
        const audio = new THREE.Audio(this.audioListener).setBuffer(audioBuffer);

        this.scene.add(audio);

        this.audio[key] = audio;
      });
    });

    this.scene.background = new THREE.CubeTextureLoader(manager).load(skybox);
    this.scene.background.minFilter = THREE.NearestFilter;
    this.scene.background.magFilter = THREE.NearestFilter;

    const objLoader = new OBJLoader(manager);
    objLoader.load("./models/model.obj", (object: THREE.Object3D) => {
      this.model = object;
    });

    const materialLoader = new THREE.MaterialLoader(manager);
    materialLoader.load("./models/material.json", (material: THREE.MeshBasicMaterial) => {
      this.material = material;
      this.material.side = THREE.DoubleSide;
    });
  }

  private init() {
    this.collisionMap = getMap(this.textures.collisionMap);
    this.heightMap = getMap(this.textures.heightMap);
    this.environment = road(this.curve, this.textures);
    this.lights = new Lights(new THREE.Vector3(16, 0, -2), [
      this.textures.lights1,
      this.textures.lights2,
      this.textures.lights3,
    ]);
    this.actor = new Actor(this.model, this.material, this.textures.ship, this.textures.shadow, this.textures.flames);
    this.actor.position.set(16, 0, 0);

    this.scene.add(new Terrain(this.textures.terrain, this.textures.rock));
    this.scene.add(this.environment);
    this.scene.add(this.lights);
    this.scene.add(this.actor);

    if (this.cameraMode === "orbit") {
      this.camera.position.set(16, 2, 4);
      this.controls.update();
    }

    this.document.body.appendChild(this.renderer.domElement);

    this.isLoaded = true;
  }

  public resize(width: number, height: number) {
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  public update() {
    if (this.isLoaded) {
      const time = this.clock.getElapsedTime();
      const looptime = 20;
      const presentTime = (time % looptime) / looptime;
      const futureTime = ((time + 0.001) % looptime) / looptime;
      const presentPosition = new THREE.Vector3();
      const futurePosition = new THREE.Vector3();

      this.curve.getPointAt(presentTime, presentPosition);
      this.curve.getPointAt(futureTime, futurePosition);

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

        const modelQuaternion = new THREE.Quaternion()
          .setFromEuler(this.actor.model.rotation.clone())
          .slerp(
            new THREE.Quaternion().setFromEuler(
              new THREE.Euler(Math.PI + deltaY * 1, -this.rotationY * 5, Math.PI + this.rotationY * 30)
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
        }

        this.updateCollision(direction3);
        this.updateLap();

        this.actor.rotateY(this.rotationY);
        this.actor.cameraPosition.rotation.setFromQuaternion(cameraQuaternion);
        this.actor.model.rotation.setFromQuaternion(modelQuaternion);
        this.actor.shadow.rotation.y = -this.actor.model.rotation.y * -2;
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

      this.audio.crowd.setVolume(
        Math.max(0, (1 / 100) * (50 - this.actor.position.clone().distanceTo(new THREE.Vector3(24, 0, 0))) * 0.5)
      );

      /*
      this.audio.engine.setVolume(
        Math.max(0, (1 / 100) * (50 - this.actor.position.clone().distanceTo(new THREE.Vector3(24, 0, 0))))
      );
      */

      this.audio.engine.setDetune(-100 + (this.speed / SPEED_MAX) * 1000);
      this.audio.engine.setVolume(0.4 + (this.speed / SPEED_MAX) * 0.3);
      this.renderer.render(this.scene, this.camera);
    }
  }

  private endLap() {
    this.lapTimes = this.lapTimes.reduce(
      (acc, current) => {
        const last = acc.pop();

        if (current < last) {
          return [...acc, current, last];
        }

        return [...acc, last, current];
      },
      [this.lapTime]
    );

    this.lapTimes = [...this.lapTimes].slice(0, 3);

    this.setLapTimes();

    this.lapTimeStart = this.clock.getElapsedTime();
  }

  private setLapTime(time: number) {
    this.lapTime = time;
    this.timeElement.setValue(time);
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
        this.audio.boost.play();
        this.setSpeed(Math.min(this.speed + SPEED_BOOST_ACCELERATION, SPEED_BOOST_MAX));
      }
    }
  }

  private updateCollision(direction: THREE.Vector3) {
    const collision = getCollision(this.collisionMap, this.actor.position, direction);

    if (collision) {
      const [left, right] = collision;
      const repulsion = new THREE.Vector3();
      const value = Math.max(this.speed, 0.01);

      if (right > left) {
        repulsion.x += value;

        this.setSpeed(this.speed * 0.25);
      } else if (right < left) {
        repulsion.x += -value;

        this.setSpeed(this.speed * 0.25);
      } else {
        repulsion.z += -value;

        this.setSpeed(this.speed * 0.25);
      }

      this.audio.ramShip.play();
      this.repulsion.copy(repulsion.applyEuler(this.actor.rotation));
    } else {
      this.repulsion.lerp(new THREE.Vector3(), 0.1);
    }
  }

  private updateThrottle() {
    if (this.keys.isUpDown) {
      //this.audio.engine.play();
      this.setSpeed(Math.min(this.speed + SPEED_ACCELERATION, SPEED_MAX));
    } else if (this.keys.isDownDown) {
      this.setSpeed(Math.max(this.speed - SPEED_ACCELERATION, -SPEED_MAX / 2));
    } else {
      this.setSpeed(Math.max(this.speed - SPEED_DECELERATION, 0));
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

  public setSpeed(value: number) {
    this.speedPrevious = this.speed;
    this.speed = value;
  }

  public setCameraMode(value: CameraMode) {
    if (value === "player" && this.cameraMode !== "player") {
      this.reset();
      this.cameraMode = value;
      this.isControllable = false;

      this.audio.music.setVolume(0.3);
      this.audio.ready.setVolume(0.5);
      this.audio.go.setVolume(0.5);
      this.audio.ramShip.setVolume(0.75);
      this.audio.boost.setVolume(0.75);
      this.audio.music.setLoop(true);
      this.audio.crowd.setLoop(true);
      this.audio.engine.setLoop(true);
      this.audio.music.play();
      this.audio.crowd.play();
      this.audio.engine.play();

      gsap
        .timeline({
          onComplete: () => {
            this.countdown();
          },
        })
        .to(this.uiBottom, { y: "100%", duration: 1 })
        .to(this.uiTop, { y: "-100%", duration: 1 }, 0)
        .to(this.hud, { x: 0, duration: 0.5, ease: "Quint.easeOut" });
    }

    if (value === "camera" && this.cameraMode !== "camera") {
      this.isControllable = false;

      this.audio.crowd.stop();
      this.audio.music.stop();
      this.audio.engine.stop();

      gsap
        .timeline({
          onComplete: () => {
            this.reset();
            this.cameraMode = value;
          },
        })
        .to(this.hud, { x: "-100%", duration: 0.5, ease: "Sine.easeIn" })
        .to(this.uiBottom, { y: "0", duration: 1 })
        .to(this.uiTop, { y: "0", duration: 1 }, 0.5);
    }
  }

  public setLapTimes() {
    this.lapTimeElements.forEach((element, index) => {
      const time = this.lapTimes[index];

      if (time) {
        element.setValue(time);
      }
    });

    if (this.lapTimes.length) {
      gsap.to(this.hudTimes, { x: 0, duration: 0.5 });
    }
  }

  public reset() {
    this.rotationY = 0;
    this.speed = 0;
    this.speedPrevious = 0;
    this.checkpoint = false;
    this.repulsion.copy(new THREE.Vector3());
    this.actor.position.set(16, 0, 1);
    this.actor.rotation.set(0, Math.PI, 0);
    this.actor.model.rotation.set(0, Math.PI, 0);
    this.actor.shadow.rotation.y = 0;
    this.setLapTime(0);
    this.lights.setState(0);
  }

  public countdown() {
    const tweener = {
      x: 0,
    };

    this.lights.setState(0);

    gsap
      .timeline({
        onComplete: () => {
          this.lapTimeStart = this.clock.getElapsedTime();
          this.isControllable = true;
        },
      })
      .to(tweener, {
        x: 1000,
        duration: 1.5,
        onComplete: () => {
          this.audio.ready.play();
          this.lights.setState(1);
        },
      })
      .to(tweener, {
        x: 2000,
        duration: 1.5,
        onComplete: () => {
          this.audio.go.play();
          this.lights.setState(2);
        },
      });
  }
}
