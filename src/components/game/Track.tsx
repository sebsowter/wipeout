import * as THREE from "three";
import { Terrain } from "./Terrain";
import { Building } from "./Building";
import { Road } from "./Road";

export interface TrackProps {
  curve: THREE.CurvePath<THREE.Vector3>;
}

export function Track({ curve }: TrackProps) {
  return (
    <mesh>
      <Terrain />
      <Road curve={curve} />
      <Building position={new THREE.Vector3(4, 4, 32)} />
      <Building position={new THREE.Vector3(4, 4, -4)} />
      <Building position={new THREE.Vector3(28, 4, -4)} rotateY={Math.PI} />
      <Building position={new THREE.Vector3(28, 4, 32)} rotateY={Math.PI} />
    </mesh>
  );
}
