import { Canvas, useLoader } from "@react-three/fiber";
import * as THREE from "three";

import { Actor } from "./Actor";
import { SkyBox } from "./Skybox";
import { Track } from "./Track";

import { HEIGHT_MAX, HEIGHT_MIN } from "../../constants/physics";
import { getCollision, getHeight, getImageDataFromTexture, getRoadCurve } from "../../utils/utils";

export function Game() {
  const collisionTexture = useLoader(THREE.TextureLoader, "./images/collision.png");
  const heightTexture = useLoader(THREE.TextureLoader, "./images/displacement.png");

  const curve = getRoadCurve();
  const collisionImageData = getImageDataFromTexture(collisionTexture);
  const heightImageData = getImageDataFromTexture(heightTexture);

  const getHit = (position: THREE.Vector3, rotation: THREE.Vector2) => getCollision(collisionImageData, position, rotation);
  const getY = (position: THREE.Vector3) => getHeight(heightImageData, position, HEIGHT_MIN, HEIGHT_MAX);

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
      <SkyBox />
      <Track curve={curve} />
      <Actor curve={curve} getHit={getHit} getY={getY} />
    </Canvas>
  );
}
