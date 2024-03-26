import { useCubeTexture } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";

export function SkyBox() {
  const { scene } = useThree();
  const texture = useCubeTexture(
    ["skyright.png", "skyleft.png", "skytop.png", "skybottom.png", "skyfront.png", "skyback.png"],
    { path: "./images/sky/" }
  );

  scene.background = texture;
  scene.background.minFilter = THREE.NearestFilter;
  scene.background.magFilter = THREE.NearestFilter;

  return null;
}
