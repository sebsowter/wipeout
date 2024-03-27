import { useLoader, useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { useRef } from "react";
import * as THREE from "three";

export function useAudio(): [{ [key: string]: THREE.Audio | undefined }, THREE.AudioListener | undefined] {
  const audioListenerRef = useRef<THREE.AudioListener>();

  const boostBuffer = useLoader(THREE.AudioLoader, "./audio/Boost.wav");
  const crowdBuffer = useLoader(THREE.AudioLoader, "./audio/Crowd.wav");
  const engineBuffer = useLoader(THREE.AudioLoader, "./audio/Engine.wav");
  const ramShipBuffer = useLoader(THREE.AudioLoader, "./audio/RamShip.wav");

  const boostRef = useRef<THREE.Audio>();
  const crowdRef = useRef<THREE.Audio>();
  const engineRef = useRef<THREE.Audio>();
  const ramShipRef = useRef<THREE.Audio>();

  const { camera } = useThree();

  useEffect(() => {
    audioListenerRef.current = new THREE.AudioListener();

    boostRef.current = new THREE.Audio(audioListenerRef.current).setBuffer(boostBuffer);
    boostRef.current.setVolume(0.75);

    crowdRef.current = new THREE.Audio(audioListenerRef.current).setBuffer(crowdBuffer);
    crowdRef.current.setVolume(0);
    crowdRef.current.setLoop(true);

    engineRef.current = new THREE.Audio(audioListenerRef.current).setBuffer(engineBuffer);
    engineRef.current.setVolume(0);
    engineRef.current.setLoop(true);

    ramShipRef.current = new THREE.Audio(audioListenerRef.current).setBuffer(ramShipBuffer);
    ramShipRef.current.setVolume(0.75);

    //ready.setVolume(0.5);
    //go.setVolume(0.5);
    //music.setVolume(0.3);
    //music.setLoop(true);

    camera.add(audioListenerRef.current);
  }, []);

  return [
    {
      boost: boostRef.current,
      crowd: crowdRef.current,
      engine: engineRef.current,
      ramShip: ramShipRef.current,
    },
    audioListenerRef.current,
  ];
}
