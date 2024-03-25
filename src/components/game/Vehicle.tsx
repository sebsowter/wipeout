import { useLoader } from "@react-three/fiber";
import { forwardRef } from "react";
import * as THREE from "three";

export const Vehicle = forwardRef<THREE.Mesh>((_, ref) => {
  const map = useLoader(THREE.TextureLoader, "./images/ship.png");
  const geometry = useLoader(THREE.BufferGeometryLoader, "./models/vehicles/geometry.json");
  const material: THREE.MeshBasicMaterial = useLoader(THREE.MaterialLoader, "./models/vehicles/material.json");
  material.map = map;
  material.map.colorSpace = THREE.SRGBColorSpace;
  material.map.minFilter = THREE.NearestFilter;
  material.map.magFilter = THREE.NearestFilter;
  material.side = THREE.DoubleSide;
  material.transparent = true;

  return (
    <mesh>
      <mesh ref={ref} position={new THREE.Vector3(0, 0.4, 0)}>
        <mesh geometry={geometry} material={material} rotation={new THREE.Euler(-Math.PI / 2, 0, Math.PI)} scale={0.03} />
      </mesh>
    </mesh>
  );
});
