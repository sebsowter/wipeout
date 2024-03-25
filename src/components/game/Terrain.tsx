import { useLoader } from "@react-three/fiber";
import * as THREE from "three";

import { getImageDataFromTexture } from "../../utils/utils";
import { mkSimplexNoise } from "../../utils/simplex";

export function Terrain() {
  const map = useLoader(THREE.TextureLoader, "./images/rock.png");
  const map2 = useLoader(THREE.TextureLoader, "./images/terrain.png");

  map.minFilter = THREE.NearestFilter;
  map.magFilter = THREE.NearestFilter;

  const material = new THREE.MeshBasicMaterial({
    color: 0x999999,
    map: map,
  });

  if (material.map) {
    material.map.colorSpace = THREE.SRGBColorSpace;
  }

  const imageData = getImageDataFromTexture(map2);

  if (imageData) {
    const geometry = new THREE.PlaneGeometry(imageData.width / 8, imageData.height / 8, imageData.width / 8, imageData.height / 8);
    const vertex = new THREE.Vector3();
    const positionAttribute = geometry.getAttribute("position");
    const simplex = mkSimplexNoise(() => 0);

    for (let i = 0; i < positionAttribute.count; i++) {
      vertex.fromBufferAttribute(positionAttribute, i);

      const x = Math.floor(vertex.x * 8 + imageData.width / 2);
      const y = Math.floor(vertex.y * 8 + imageData.height / 2);
      const index = Math.floor(y * imageData.width + x) * 4;
      const height = imageData.data[index];
      const r = height / 255;
      const noise = simplex.noise2D(vertex.x / 30, vertex.y / 30);

      positionAttribute.setXYZ(i, vertex.x, vertex.y, vertex.z + r * 16 + r * noise * 8);
    }

    geometry.attributes.position.needsUpdate = true;
    geometry.computeVertexNormals();
    //geometry.computeBoundingSphere();

    return <mesh geometry={geometry} material={material} position={new THREE.Vector3(0, -2, 0)} rotation-x={-Math.PI / 2} />;
  }

  return null;
}
