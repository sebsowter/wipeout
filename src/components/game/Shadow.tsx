import { useLoader } from "@react-three/fiber";
import * as THREE from "three";

export interface ShadowProps {
  rotationY: number;
}

export function Shadow({ rotationY }: ShadowProps) {
  const map = useLoader(THREE.TextureLoader, "./images/shadow.png");
  const geometry = new THREE.PlaneGeometry(0.75, 0.375);
  const material = new THREE.MeshBasicMaterial({
    transparent: true,
    map,
    side: THREE.DoubleSide,
    opacity: 0.4,
  });
  material.depthTest = false;

  return <mesh geometry={geometry} material={material} position={new THREE.Vector3(0, 0, 0)} renderOrder={998} rotation-y={rotationY} />;
}
