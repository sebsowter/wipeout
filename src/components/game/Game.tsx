import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import { getRoadCurve } from "../../utils/utils";

import { SkyBox } from "./Skybox";
import { Track } from "./Track";
import { Lights } from "./Lights";
import { Actor } from "./Actor";

export function Game() {
  const curve = getRoadCurve();

  return (
    <Canvas
      camera={{
        aspect: 16 / 9,
        far: 1000,
        fov: 100,
        near: 0.1,
      }}
    >
      <Suspense fallback={null}>
        <SkyBox />
        <Track curve={curve} />
        <Lights />
        <Actor curve={curve} />
      </Suspense>
    </Canvas>
  );
}
