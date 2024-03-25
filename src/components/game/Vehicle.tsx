import { useLoader } from "@react-three/fiber";
import { forwardRef } from "react";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

export const Vehicle = forwardRef<THREE.Mesh>((_, ref) => {
  const model = useLoader(OBJLoader, "./models/vehicles/vehicle1.obj");
  //model.scale.multiplyScalar(0.06);

  const material = new THREE.MeshBasicMaterial({
    transparent: true,
    color: 0xff0000,
    side: THREE.DoubleSide,
  });
  material.depthTest = false;

  return (
    <mesh ref={ref}>
      <boxGeometry args={[0.1, 0.1, 0.1]} />
    </mesh>
  );

  /*<primitive object={model} />*/
});
