import { useLoader } from "@react-three/fiber";
import * as THREE from "three";

import { getCollision, getHeight, getImageDataFromTexture, getPixel } from "../utils/utils";
import { HEIGHT_MAX, HEIGHT_MIN } from "../constants";

export function useCollisions() {
  const collisionTexture = useLoader(THREE.TextureLoader, "./images/collision.png");
  const collisionImageData = getImageDataFromTexture(collisionTexture);

  const heightTexture = useLoader(THREE.TextureLoader, "./images/displacement.png");
  const heightImageData = getImageDataFromTexture(heightTexture);

  const getBoost = (position: THREE.Vector3) =>
    getPixel(collisionImageData, new THREE.Vector2(position.x, position.z), 8);

  const getHit = (position: THREE.Vector3, rotation: THREE.Vector2) =>
    getCollision(collisionImageData, position, rotation);

  const getY = (position: THREE.Vector3) => getHeight(heightImageData, position, HEIGHT_MIN, HEIGHT_MAX);

  return {
    getBoost,
    getHit,
    getY,
  };
}
