import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import { Scene } from "./Scene";

export function Game() {
  return (
    <Canvas
      camera={{
        aspect: 16 / 9,
        far: 1000,
        fov: 100,
        near: 0.1,
        //position: new THREE.Vector3(16, 4, 0),
      }}
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
}
