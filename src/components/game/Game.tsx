import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

import { Actor } from "./Actor";
import { SkyBox } from "./Skybox";
import { Track } from "./Track";

import { getRoadCurve } from "../../utils/utils";
import { Suspense } from "react";

export function Game() {
  const curve = getRoadCurve();

  return (
    <Canvas
      camera={{
        aspect: 16 / 9,
        far: 1000,
        fov: 100,
        near: 0.1,
        position: new THREE.Vector3(16, 4, 0),
      }}
    >
      <Suspense fallback={null}>
        <SkyBox />
        <Track curve={curve} />
        <Actor curve={curve} />
      </Suspense>
    </Canvas>
  );
}
