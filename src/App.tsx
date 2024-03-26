import * as THREE from "three";
import { create } from "zustand";

import { Game } from "./components/game/Game";
import { Hud } from "./components/Hud/Hud";
import { SPEED_MAX, TURN_MAX } from "./constants";
import GlobalStyle from "./styles";

import * as Styles from "./App.styles";

export type CameraMode = "camera" | "orbit" | "player" | "bird";

export interface GameState {
  checkpoint: boolean;
  incrementSpeed: (by: number) => void;
  isControllable: boolean;
  lerpRepulsion: () => void;
  lapTimes: number[];
  lapTimeStart: number;
  lights: number;
  mode: CameraMode;
  multiplySpeed: (by: number) => void;
  position: THREE.Vector3;
  repulsion: THREE.Vector3;
  reduceSpeed: (by: number) => void;
  reduceTurn: (by: number) => void;
  reset: () => void;
  rotation: THREE.Euler;
  setLapTime: () => void;
  updateMode: (mode: CameraMode) => void;
  setSpeed: (speed: number) => void;
  speed: number;
  speedPrevious: number;
  startDelta: number;
  time: number;
  turn: number;
  updateCheckpoint: (checkpoint: boolean) => void;
  updateControllable: (isControllable: boolean) => void;
  updateLapTimeStart: (lapTimeStart: number) => void;
  updatePosition: (position: THREE.Vector3) => void;
  updateRepulsion: (repulsion: THREE.Vector3) => void;
  updateRotation: (rotation: THREE.Euler) => void;
  updateTime: (time: number) => void;
  updateTurn: (by: number) => void;
}

export const initialState: Partial<GameState> = {
  checkpoint: false,
  isControllable: false,
  lapTimeStart: 0,
  position: new THREE.Vector3(16, 0, 1),
  repulsion: new THREE.Vector3(),
  rotation: new THREE.Euler(0, Math.PI, 0),
  speed: 0,
  speedPrevious: 0,
  startDelta: 0,
  time: 0,
  turn: 0,
};

export const useGameStore = create<GameState>()((set) => ({
  checkpoint: false,
  incrementSpeed: (by) =>
    set((state) => ({
      ...state,
      speedPrevious: state.speed,
      speed: Math.min(Math.max(state.speed + by, -SPEED_MAX / 2), SPEED_MAX),
    })),
  isControllable: false,
  lerpRepulsion: () =>
    set((state) => {
      return {
        ...state,
        repulsion: state.repulsion.clone().lerp(new THREE.Vector3(), 0.1),
      };
    }),
  lapTimes: [54564.32, 3215.56, 879846.12],
  lapTimeStart: 0,
  lights: 0,
  mode: "camera",
  multiplySpeed: (by) =>
    set((state) => ({
      ...state,
      speedPrevious: state.speed,
      speed: state.speed * by,
    })),
  position: new THREE.Vector3(16, 0, 1),
  speedPrevious: 0,
  reduceSpeed: (by) =>
    set((state) => ({
      ...state,
      speed: state.speed > 0 ? Math.max(state.speed - by, 0) : state.speed < 0 ? Math.min(state.speed + by, 0) : 0,
    })),
  reduceTurn: (by) =>
    set((state) => ({
      ...state,
      turn: state.turn > 0 ? Math.max(state.turn - by, 0) : state.turn < 0 ? Math.min(state.turn + by, 0) : 0,
    })),
  repulsion: new THREE.Vector3(),
  reset: () =>
    set((state) => {
      console.log("reset");
      return {
        ...state,
        ...initialState,
      };
    }),
  rotation: new THREE.Euler(0, Math.PI, 0),
  setLapTime: () =>
    set((state) => ({
      ...state,
      lapTimes: [...state.lapTimes, state.time],
    })),
  updateMode: (mode) =>
    set((state) => {
      return {
        ...state,
        ...initialState,
        isControllable: mode === "player",
        mode,
      };
    }),
  setSpeed: (speed) =>
    set((state) => ({
      ...state,
      speedPrevious: state.speed,
      speed: Math.max(Math.min(speed, SPEED_MAX), -SPEED_MAX / 2),
    })),
  speed: 0,
  startDelta: 0,
  time: 0,
  turn: 0,
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
            [state.time]
          ),
        ].slice(0, 3),
        //lapTimeStart,
      };
    }),
  updateControllable: (isControllable) =>
    set((state) => ({
      ...state,
      isControllable,
    })),
  updateLapTimeStart: (lapTimeStart) =>
    set((state) => ({
      ...state,
      lapTimeStart,
    })),
  updatePosition: (position) =>
    set((state) => ({
      ...state,
      position,
    })),
  updateRepulsion: (repulsion) =>
    set((state) => ({
      ...state,
      repulsion,
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
  updateTurn: (by) =>
    set((state) => ({
      ...state,
      turn: Math.min(Math.max(state.turn + by, -TURN_MAX), TURN_MAX),
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
