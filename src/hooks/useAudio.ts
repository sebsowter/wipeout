import { useLoader, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";

import { useGameStore } from "../state";

export function useAudio(): [{ [key: string]: THREE.Audio | undefined }, THREE.AudioListener | undefined] {
  const { isMuted, mode } = useGameStore();

  const boostBuffer = useLoader(THREE.AudioLoader, "./audio/Boost.wav");
  const collideBuffer = useLoader(THREE.AudioLoader, "./audio/Collide.wav");
  const crowdBuffer = useLoader(THREE.AudioLoader, "./audio/Crowd.wav");
  const engineBuffer = useLoader(THREE.AudioLoader, "./audio/Engine.wav");
  const goBuffer = useLoader(THREE.AudioLoader, "./audio/Go.wav");
  const musicBuffer = useLoader(THREE.AudioLoader, "./audio/ChemicalBeats.mp3");
  const readyBuffer = useLoader(THREE.AudioLoader, "./audio/Ready.wav");

  const audioListener = useRef(new THREE.AudioListener());
  const boost = useRef(new THREE.Audio(audioListener.current).setBuffer(boostBuffer).setVolume(isMuted ? 0 : 0.75));
  const collide = useRef(new THREE.Audio(audioListener.current).setBuffer(collideBuffer).setVolume(isMuted ? 0 : 0.75));
  const crowd = useRef(new THREE.Audio(audioListener.current).setBuffer(crowdBuffer).setVolume(0).setLoop(true));
  const engine = useRef(new THREE.Audio(audioListener.current).setBuffer(engineBuffer).setVolume(0).setLoop(true));
  const go = useRef(new THREE.Audio(audioListener.current).setBuffer(goBuffer).setVolume(isMuted ? 0 : 0.5));
  const music = useRef(new THREE.Audio(audioListener.current).setBuffer(musicBuffer).setVolume(0.3).setLoop(true));
  const ready = useRef(new THREE.Audio(audioListener.current).setBuffer(readyBuffer).setVolume(isMuted ? 0 : 0.5));

  const { camera } = useThree();

  useEffect(() => {
    camera.add(audioListener.current);
  }, [camera]);

  useEffect(() => {
    if (isMuted || mode === "camera") {
      boost.current?.setVolume(0);
      collide.current?.setVolume(0);
      go.current?.setVolume(0);
      ready.current?.setVolume(0);

      crowd.current?.pause();
      engine.current?.pause();
      music.current?.pause();
    } else {
      boost.current?.setVolume(0.75);
      collide.current?.setVolume(0.75);
      go.current?.setVolume(0.5);
      ready.current?.setVolume(0.5);

      if (crowd.current && !crowd.current.isPlaying) {
        crowd.current.play();
      }

      if (engine.current && !engine.current.isPlaying) {
        engine.current.play();
      }

      if (music.current && !music.current.isPlaying) {
        music.current.play();
      }
    }
  }, [isMuted, mode]);

  return [
    {
      boost: boost.current,
      collide: collide.current,
      crowd: crowd.current,
      engine: engine.current,
      go: go.current,
      music: music.current,
      ready: ready.current,
    },
    audioListener.current,
  ];
}
