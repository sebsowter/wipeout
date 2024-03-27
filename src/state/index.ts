import { create } from "zustand";

export type CameraMode = "camera" | "orbit" | "player" | "bird";

export interface GameState {
  checkpoint: boolean;
  isControllable: boolean;
  isMuted: boolean;
  lapTimes: number[];
  lapTimeStart: number;
  lights: number;
  mode: CameraMode;
  updateCheckpoint: (checkpoint: boolean) => void;
  updateLights: (lights: number) => void;
  updateMode: (mode: CameraMode) => void;
  updateMuted: (isMuted: boolean) => void;
}

export const useGameStore = create<GameState>()((set) => ({
  checkpoint: false,
  isControllable: false,
  isMuted: true,
  lapTimes: [],
  lapTimeStart: 0,
  lights: 0,
  mode: "camera",
  updateCheckpoint: (checkpoint) =>
    set((state) => {
      if (checkpoint) {
        return {
          ...state,
          checkpoint,
        };
      }

      const lapTimes = state.lapTimes.reduce(
        (previousValue, currentValue) => {
          const lastValue = previousValue.pop();

          if (lastValue) {
            if (currentValue < lastValue) {
              return [...previousValue, currentValue, lastValue];
            }

            return [...previousValue, lastValue, currentValue];
          }

          return [...previousValue, currentValue];
        },
        [new Date().valueOf() - state.lapTimeStart]
      );

      return {
        ...state,
        checkpoint,
        lapTimes: lapTimes.slice(0, Math.min(3, lapTimes.length)),
        lapTimeStart: new Date().valueOf(),
      };
    }),
  updateLights: (lights) =>
    set((state) => {
      if (lights === 2) {
        return {
          ...state,
          isControllable: true,
          lapTimeStart: new Date().valueOf(),
          lights,
        };
      }

      return {
        ...state,
        lights,
      };
    }),
  updateMode: (mode) =>
    set((state) => ({
      ...state,
      checkpoint: false,
      isControllable: false,
      lapTimeStart: new Date().valueOf(),
      lights: 0,
      mode,
    })),
  updateMuted: (isMuted) =>
    set((state) => ({
      ...state,
      isMuted,
    })),
}));
