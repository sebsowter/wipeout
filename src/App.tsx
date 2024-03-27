import * as THREE from "three";
import { create } from "zustand";

import { Game } from "./components/game/Game";
import { Hud } from "./components/Hud/Hud";
import GlobalStyle from "./styles";

import * as Styles from "./App.styles";

export type CameraMode = "camera" | "orbit" | "player" | "bird";

export interface GameState {
  checkpoint: boolean;
  isControllable: boolean;
  lapTimes: number[];
  lapTimeStart: number;
  lights: number;
  mode: CameraMode;
  position: THREE.Vector3;
  reset: () => void;
  rotation: THREE.Euler;
  updateCheckpoint: (checkpoint: boolean) => void;
  updateControllable: (isControllable: boolean) => void;
  updateMode: (mode: CameraMode) => void;
  updatePosition: (position: THREE.Vector3) => void;
  updateRotation: (rotation: THREE.Euler) => void;
  updateTime: (time: number) => void;
}

export const initialState: Partial<GameState> = {
  checkpoint: false,
  isControllable: false,
  lapTimeStart: new Date().valueOf(),
  position: new THREE.Vector3(16, 0, 1),
  rotation: new THREE.Euler(0, Math.PI, 0),
};

export const useGameStore = create<GameState>()((set) => ({
  checkpoint: false,
  isControllable: false,
  lapTimes: [54564.32, 3215.56, 879846.12],
  lapTimeStart: 0,
  lights: 0,
  mode: "camera",
  position: new THREE.Vector3(16, 0, 1),
  reset: () =>
    set((state) => {
      console.log("reset");
      return {
        ...state,
        ...initialState,
      };
    }),
  rotation: new THREE.Euler(0, Math.PI, 0),
  updateCheckpoint: (checkpoint) =>
    set((state) => {
      if (checkpoint) {
        return {
          ...state,
          checkpoint,
        };
      }

      return {
        ...state,
        checkpoint,
        lapTimes: [
          ...state.lapTimes.reduce(
            (previousValue, currentValue) => {
              const lastValue = [...previousValue].pop();

              if (lastValue) {
                if (currentValue < lastValue) {
                  return [...previousValue, currentValue, lastValue];
                }

                return [...previousValue, lastValue, currentValue];
              }

              return [...previousValue, currentValue];
            },
            [new Date().valueOf() - state.lapTimeStart]
          ),
        ].slice(0, 3),
        lapTimeStart: new Date().valueOf(),
      };
    }),
  updateControllable: (isControllable) =>
    set((state) => ({
      ...state,
      isControllable,
    })),
  updateMode: (mode) =>
    set((state) => {
      return {
        ...state,
        ...initialState,
        isControllable: mode === "player",
        lapTimeStart: new Date().valueOf(),
        mode,
      };
    }),
  updatePosition: (position) =>
    set((state) => ({
      ...state,
      position,
    })),
  updateRotation: (rotation) =>
    set((state) => ({
      ...state,
      rotation,
    })),
  updateTime: (time) =>
    set((state) => ({
      ...state,
      time,
    })),
}));

export function App() {
  return (
    <Styles.Wrapper>
      <GlobalStyle />
      <Game />
      <Hud />
    </Styles.Wrapper>
  );
}
