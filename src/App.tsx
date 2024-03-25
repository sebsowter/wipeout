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
  rotationY: THREE.Euler;
  setLapTime: () => void;
  setMode: (mode: CameraMode) => void;
  setPosition: (position: THREE.Vector3) => void;
  setSpeed: (speed: number) => void;
  setTime: (time: number) => void;
  speed: number;
  speedPrevious: number;
  startDelta: number;
  time: number;
  turn: number;
  updateControllable: (isControllable: boolean) => void;
  updateRepulsion: (repulsion: THREE.Vector3) => void;
  updateRotationY: (rotationY: THREE.Euler) => void;
  updateTurn: (by: number) => void;
}

export const initialState: Partial<GameState> = {
  checkpoint: false,
  isControllable: false,
  position: new THREE.Vector3(16, 0, 1),
  repulsion: new THREE.Vector3(),
  rotationY: new THREE.Euler(0, Math.PI, 0),
  speed: 0,
  speedPrevious: 0,
  startDelta: 0,
  time: 0,
  turn: 0,
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
    lapTimes: [54564.32, 3215.56, 879846.12],
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
    reduceRotationY: (by) =>
      set((state) => ({
        ...state,
        turn: state.turn > 0 ? Math.max(state.turn - by, 0) : state.turn < 0 ? Math.min(state.turn + by, 0) : 0,
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
    rotationY: new THREE.Euler(0, Math.PI, 0),
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
    startDelta: 0,
    time: 0,
    turn: 0,
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
    updateRotationY: (rotationY) =>
      set((state) => ({
        ...state,
        rotationY,
      })),
    updateTurn: (by) =>
      set((state) => ({
        ...state,
        turn: Math.min(Math.max(state.turn + by, -TURN_MAX), TURN_MAX),
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
