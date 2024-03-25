import { useEffect } from "react";
import * as THREE from "three";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

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
  lights: number;
  mode: CameraMode;
  multiplySpeed: (by: number) => void;
  position: THREE.Vector3;
  repulsion: THREE.Vector3;
  reduceRotationY: (by: number) => void;
  reduceSpeed: (by: number) => void;
  reset: () => void;
  rotationY: number;
  setLapTime: () => void;
  setMode: (mode: CameraMode) => void;
  setPosition: (position: THREE.Vector3) => void;
  setSpeed: (speed: number) => void;
  setTime: (time: number) => void;
  speed: number;
  speedPrevious: number;
  time: number;
  updateControllable: (isControllable: boolean) => void;
  updateRepulsion: (repulsion: THREE.Vector3) => void;
  updateRotationY: (by: number) => void;
}

export const initialState: Partial<GameState> = {
  checkpoint: false,
  isControllable: false,
  position: new THREE.Vector3(16, 0, 0),
  repulsion: new THREE.Vector3(),
  rotationY: 0,
  speed: 0,
  speedPrevious: 0,
  time: 0,
};

export const useGameStore = create<GameState>()(
  // devtools(
  // persist(
  (set) => ({
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
    lapTimes: [],
    lights: 0,
    mode: "camera",
    multiplySpeed: (by) =>
      set((state) => ({
        ...state,
        speedPrevious: state.speed,
        speed: state.speed * by,
      })),
    position: new THREE.Vector3(16, 0, 0),
    speedPrevious: 0,
    reduceRotationY: (by) =>
      set((state) => ({
        ...state,
        rotationY: state.rotationY > 0 ? Math.max(state.rotationY - by, 0) : state.rotationY < 0 ? Math.min(state.rotationY + by, 0) : 0,
      })),
    reduceSpeed: (by) =>
      set((state) => ({
        ...state,
        speed: state.speed > 0 ? Math.max(state.speed - by, 0) : state.speed < 0 ? Math.min(state.speed + by, 0) : 0,
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
    rotationY: 0,
    setLapTime: () =>
      set((state) => ({
        ...state,
        lapTimes: [...state.lapTimes, state.time],
      })),
    setMode: (mode) =>
      set((state) => {
        return {
          ...state,
          ...initialState,
          isControllable: mode === "player",
          mode,
        };
      }),
    setPosition: (position) =>
      set((state) => ({
        ...state,
        position,
      })),
    setSpeed: (speed) =>
      set((state) => ({
        ...state,
        speedPrevious: state.speed,
        speed: Math.max(Math.min(speed, SPEED_MAX), -SPEED_MAX / 2),
      })),
    setTime: (time) =>
      set((state) => ({
        ...state,
        time,
      })),
    speed: 0,
    time: 0,
    updateControllable: (isControllable) =>
      set((state) => ({
        ...state,
        isControllable,
      })),
    updateRepulsion: (repulsion) =>
      set((state) => ({
        ...state,
        repulsion,
      })),
    updateRotationY: (by) =>
      set((state) => ({
        ...state,
        rotationY: Math.min(Math.max(state.rotationY + by, -TURN_MAX), TURN_MAX),
      })),
  })
  // {
  // name: "game-storage",
  // }
  // )
  // )
);

export function App() {
  const reset = useGameStore((state) => state.reset);

  useEffect(() => {
    // reset();
  }, []);

  return (
    <Styles.Wrapper>
      <GlobalStyle />
      <Game />
      <Hud />
    </Styles.Wrapper>
  );
}
