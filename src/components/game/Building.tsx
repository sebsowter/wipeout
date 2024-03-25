import * as THREE from "three";

// Stand asset.
// TODO: Add textures.

export interface BuildingProps {
  position: THREE.Vector3;
  rotateY?: number;
}

export function Building({ position, rotateY }: BuildingProps) {
  const material2 = new THREE.MeshBasicMaterial({
    color: 0x111111,
  });

  const material3 = new THREE.MeshBasicMaterial({
    color: 0x000000,
  });

  const materialBlack = new THREE.MeshBasicMaterial({
    color: 0x000000,
  });

  const material = new THREE.MeshBasicMaterial({
    color: 0x333333,
  });

  const geometry2 = new THREE.PlaneGeometry(32, 2);
  const geometry3 = new THREE.PlaneGeometry(32, 6);
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

  /*
  const mesh = new THREE.Mesh(geometry, [materialBlack, materialBlack, material, materialBlack, materialBlack, materialBlack]);
  const mesh2 = new THREE.Mesh(geometry2, material2);
  mesh2.position.set(-6, 7, 0);
  mesh2.rotateY(Math.PI / 2);
  const mesh3 = new THREE.Mesh(geometry3, material3);
  mesh3.position.set(-3, 8, 0);
  mesh3.rotateY(Math.PI / 2);
  mesh3.rotateX(Math.PI / 2);

  object.add(mesh);
  object.add(mesh2);
  object.add(mesh3);
  */

  return (
    <group position={position} rotation-y={rotateY}>
      <mesh geometry={geometry} material={[materialBlack, materialBlack, material, materialBlack, materialBlack, materialBlack]} />
      <mesh geometry={geometry2} material={material2} position={new THREE.Vector3(-6, 7, 0)} rotation-y={Math.PI / 2} />
      <mesh geometry={geometry3} material={material3} position={new THREE.Vector3(-3, 8, 0)} rotation-x={Math.PI / 2} rotation-y={Math.PI / 2} />
    </group>
  );
}
