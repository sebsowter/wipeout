import gsap from "gsap";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

import { createCollisionMap, createHeightMap, getCollision, getHeight, getPixel, getTimeString } from "./utils";
import { Actor } from "./Actor";
import { Keys } from "./Keys";

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

export class Ui {
  public document: Document;
  public hud: HTMLDivElement;
  public lapTime = 0;
  public lapTimeStart = 0;
  public lapTimeElements: HTMLParagraphElement[];
  public lapTimes: number[] = [];
  public timeElement: HTMLParagraphElement;
  public ui: HTMLDivElement;
  public uiBottom: HTMLDivElement;
  public uiBottom2: HTMLDivElement;
  public uiTop: HTMLDivElement;
  public hudData: HTMLDivElement;
  public hudTimes: HTMLDivElement;

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

    this.timeElement = document.createElement("p");
    this.timeElement.className = "time-large";

    this.hudData.appendChild(heading1);
    this.hudData.appendChild(this.timeElement);
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
      const element = document.createElement("p");
      element.className = "time-small";
      element.style.top = `${2.4 + index * 2.4}rem`;

      if (time) {
        element.innerText = `${index + 1}. ${getTimeString(time)}`;
      }

      return element;
    });

    this.lapTimeElements.forEach((element) => {
      this.hudTimes.appendChild(element);
    });

    this.setLapTime(this.lapTime);
    this.document = document;
    this.document.body.appendChild(this.ui);
    this.document.body.appendChild(this.hud);
  }

  public update(time: number) {
    this.setLapTime(time);
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

    console.log("this.lapTime", this.lapTime);
    console.log("this.lapTimes", this.lapTimes);

    this.setLapTimes();

    this.lapTimeStart = this.clock.getElapsedTime();
  }

  private setLapTime(time: number) {
    this.lapTime = time;
    this.timeElement.innerHTML = getTimeString(time);
  }

  public setState(value: number) {
    if (value === 0) {
      gsap
        .timeline({
          onComplete: () => {
            dispatchEvent(new Event("COMPLETE"));
            //this.countdown();
          },
        })
        .to(this.uiBottom, { y: "100%", duration: 1 })
        .to(this.uiTop, { y: "-100%", duration: 1 }, 0)
        .to(this.hud, { x: 0, duration: 0.5, ease: "Quint.easeOut" });
    } else {
      gsap
        .timeline({
          onComplete: () => {
            dispatchEvent(new Event("COMPLETE"));
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
        element.innerText = `${index + 1}. ${getTimeString(time)}`;
      }
    });

    if (this.lapTimes.length) {
      gsap.to(this.hudTimes, { x: 0, duration: 0.5 });
    }
  }
}
