import { useLoader } from "@react-three/fiber";
import * as THREE from "three";

export interface PillarProps {
  position: [number, number, number];
  rotationZ?: number;
}

export function Pillar({ position, rotationZ = 0 }: PillarProps) {
  const texture = useLoader(THREE.TextureLoader, "./images/pillar.png");

  return (
    <mesh position={position} rotation-z={rotationZ}>
      <boxGeometry args={[1, 12, 1]} />
      <meshBasicMaterial map={texture} transparent />
    </mesh>
  );
}
