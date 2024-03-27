import { useLoader } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";

import { useGameStore } from "../../state";

export function Lights() {
  const { lights, mode, updateLights } = useGameStore();

  const materialRef = useRef<THREE.MeshBasicMaterial>(null!);

  const texture1 = useLoader(THREE.TextureLoader, "./images/lights1.png");
  const texture2 = useLoader(THREE.TextureLoader, "./images/lights2.png");
  const texture3 = useLoader(THREE.TextureLoader, "./images/lights3.png");

  useEffect(() => {
    const textures = [texture1, texture2, texture3];

    let timeout!: NodeJS.Timeout;

    if (mode === "player") {
      materialRef.current.map = textures[lights % textures.length];

      if (lights < 2) {
        timeout = setTimeout(() => updateLights(lights + 1), 1500);
      }
    } else if (mode === "camera") {
      clearTimeout(timeout);

      materialRef.current.map = textures[2];
      materialRef.current.map.colorSpace = THREE.SRGBColorSpace;
    }

    return () => clearTimeout(timeout);
  }, [lights, mode, texture1, texture2, texture3, updateLights]);

  return (
    <group position={[16, 0, -2]}>
      <mesh position={[0, 2, 0]}>
        <planeGeometry args={[1.5, 0.5]} />
        <meshBasicMaterial color={0xcccccc} ref={materialRef} side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[1.5, 2.3, 0]}>
        <boxGeometry args={[3.1, 0.1, 0.1]} />
        <meshBasicMaterial color={0x666666} />
      </mesh>
      <mesh position={[3, 1.125, 0]}>
        <boxGeometry args={[0.1, 2.25, 0.1]} />
        <meshBasicMaterial color={0x666666} />
      </mesh>
    </group>
  );
}
