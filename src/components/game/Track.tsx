import * as THREE from "three";
import { Building } from "./Building";
import { Lights } from "./Lights";
import { Road } from "./Road";
import { Terrain } from "./Terrain";

export interface TrackProps {
  curve: THREE.CurvePath<THREE.Vector3>;
}

export function Track({ curve }: TrackProps) {
  return (
    <group>
      <Terrain />
      <Road curve={curve} />
      <Building position={[4, 4, 32]} />
      <Building position={[4, 4, -4]} />
      <Building position={[28, 4, -4]} rotateY={Math.PI} />
      <Building position={[28, 4, 32]} rotateY={Math.PI} />
      <Lights />
    </group>
  );
}
