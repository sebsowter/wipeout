import { useLoader } from "@react-three/fiber";
import { forwardRef } from "react";
import * as THREE from "three";

export const Shadow = forwardRef<THREE.Mesh>((_, ref) => {
  const map = useLoader(THREE.TextureLoader, "./images/shadow.png");
  const geometry = new THREE.PlaneGeometry(0.75, 0.375);
  const material = new THREE.MeshBasicMaterial({
    map,
    opacity: 0.4,
    side: THREE.DoubleSide,
    transparent: true,
  });
  material.depthTest = false;

  return (
    <mesh geometry={geometry} material={material} position={new THREE.Vector3(0, 0, 0)} ref={ref} renderOrder={998} />
  );
});
