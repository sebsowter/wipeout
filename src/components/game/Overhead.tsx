import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { Pillar } from "./Pillar";

export interface OverheadProps {
  position: [number, number, number];
  url: string;
}

export function Overhead({ position, url }: OverheadProps) {
  const texture = useLoader(THREE.TextureLoader, url);

  const [x, y, z] = position;

  const material = new THREE.MeshBasicMaterial({
    color: 0xcccccc,
    side: THREE.DoubleSide,
  });
  material.map = texture;
  material.map.colorSpace = THREE.SRGBColorSpace;

  return (
    <mesh position={position}>
      <mesh material={material} position={[x, y + 4, z]}>
        <planeGeometry args={[10, 4, 1, 1]} />
        {/* <meshBasicMaterial map={texture} /> */}
      </mesh>
      <Pillar position={[x + 5.5, y, z]} />
      <Pillar position={[x - 5.5, y, z]} />
      <Pillar position={[x, y + 6.5, z]} rotationZ={Math.PI / 2} />
    </mesh>
  );
}
