import { useLoader } from "@react-three/fiber";
import { forwardRef } from "react";
import * as THREE from "three";

export const Vehicle = forwardRef<THREE.Mesh>((_, ref) => {
  const map = useLoader(THREE.TextureLoader, "./images/ship.png");
  const geometry = useLoader(THREE.BufferGeometryLoader, "./models/vehicle/geometry.json");
  const material: THREE.MeshBasicMaterial = useLoader(THREE.MaterialLoader, "./models/vehicle/material.json");
  material.map = map;
  material.map.colorSpace = THREE.SRGBColorSpace;
  material.map.minFilter = THREE.NearestFilter;
  material.map.magFilter = THREE.NearestFilter;
  material.side = THREE.DoubleSide;
  material.transparent = true;

  return (
    <mesh position={[0, 0.4, 0]} ref={ref}>
      <mesh geometry={geometry} material={material} rotation={[-Math.PI / 2, 0, 0]} scale={0.03} />
    </mesh>
  );
});
