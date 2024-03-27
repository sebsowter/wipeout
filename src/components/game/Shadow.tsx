import { useLoader } from "@react-three/fiber";
import { forwardRef } from "react";
import * as THREE from "three";

export const Shadow = forwardRef<THREE.Mesh>((_, ref) => {
  const map = useLoader(THREE.TextureLoader, "./images/shadow.png");

  return (
    <mesh position={[0, 0, 0]} ref={ref} renderOrder={998}>
      <planeGeometry args={[0.75, 0.375]} />
      <meshBasicMaterial depthTest={false} map={map} opacity={0.4} side={THREE.DoubleSide} transparent />
    </mesh>
  );
});
