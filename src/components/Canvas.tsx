import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";

export const Scene: React.FC = () => {
  return (
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
    </Canvas>
  );
};
