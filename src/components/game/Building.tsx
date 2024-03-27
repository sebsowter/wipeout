import * as THREE from "three";

export interface BuildingProps {
  position: THREE.Vector3;
  rotateY?: number;
}

export function Building({ position, rotateY }: BuildingProps) {
  const materialBlack = new THREE.MeshBasicMaterial({
    color: 0x000000,
    side: THREE.DoubleSide,
  });

  const materialGrey = new THREE.MeshBasicMaterial({
    color: 0x333333,
  });

  const geometry = new THREE.BoxGeometry(12, 12, 32);
  const vertex = new THREE.Vector3();
  const positionAttribute = geometry.getAttribute("position");

  for (let i = 0; i < positionAttribute.count; i++) {
    vertex.fromBufferAttribute(positionAttribute, i);

    if (vertex.x > 0 && vertex.y > 0) {
      vertex.y = -2;
    }

    positionAttribute.setXYZ(i, vertex.x, vertex.y, vertex.z);
  }

  geometry.attributes.position.needsUpdate = true;
  geometry.computeVertexNormals();
  //geometry.computeBoundingSphere();

  return (
    <group position={position} rotation-y={rotateY}>
      <mesh
        geometry={geometry}
        material={[materialBlack, materialBlack, materialGrey, materialBlack, materialBlack, materialBlack]}
      />
      <mesh position={new THREE.Vector3(-6, 7, 0)} rotation-y={Math.PI / 2}>
        <planeGeometry args={[32, 2]} />
        <meshBasicMaterial color={0x000000} />
      </mesh>
      <mesh position={[-3, 8, 0]} rotation={[Math.PI / 2, -Math.PI / 2, 0, "YZX"]}>
        <planeGeometry args={[32, 6]} />
        <meshBasicMaterial color={0x000000} />
      </mesh>
    </group>
  );
}
