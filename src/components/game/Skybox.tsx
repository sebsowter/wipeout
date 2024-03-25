import { useThree } from "@react-three/fiber";
import * as THREE from "three";

export function SkyBox() {
  const loader = new THREE.CubeTextureLoader();
  const texture = loader.load(["./images/sky/skyright.png", "./images/sky/skyleft.png", "./images/sky/skytop.png", "./images/sky/skybottom.png", "./images/sky/skyfront.png", "./images/sky/skyback.png"]);

  const { scene } = useThree();

  scene.background = texture;
  scene.background.minFilter = THREE.NearestFilter;
  scene.background.magFilter = THREE.NearestFilter;

  return null;
}
