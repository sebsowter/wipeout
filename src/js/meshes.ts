import * as THREE from "three";
import { InstancedFlow } from "three/examples/jsm/modifiers/CurveModifier.js";

export const roadSegment = () => {
  const segmentsX = 16;
  const segmentsY = 16;
  const geometry = new THREE.PlaneGeometry(8, 4, segmentsX, segmentsY);
  const vertex = new THREE.Vector3();
  const positionAttribute = geometry.attributes.position;

  for (let i = 0; i < positionAttribute.count; i++) {
    vertex.fromBufferAttribute(positionAttribute, i);

    const z =
      i % (segmentsX + 1) < Math.round(segmentsX * 0.25) || i % (segmentsX + 1) > Math.round(segmentsX * 0.75)
        ? 0.5
        : 0;

    positionAttribute.setXYZ(i, vertex.x, vertex.y, z);
  }

  geometry.rotateX(Math.PI / 2).rotateY(Math.PI / 2);
  geometry.attributes.position.needsUpdate = true;
  geometry.computeVertexNormals();

  return geometry;
};

export const roadSpine = () => {
  const curvePath = new THREE.CurvePath<THREE.Vector3>();
  curvePath.add(
    new THREE.CatmullRomCurve3(
      [
        new THREE.Vector3(0, -75, 0),
        new THREE.Vector3(0, 75, 0),
        new THREE.Vector3(0, 100, 0),
        new THREE.Vector3(-25, 100, 0),
        new THREE.Vector3(-50, 100, 0),
        new THREE.Vector3(-50, 75, 0),
        new THREE.Vector3(-50.01, 50, 0),
        new THREE.Vector3(-50, -50, 0),
        new THREE.Vector3(-50, -75, 0),
        new THREE.Vector3(-50, -100, 0),
        new THREE.Vector3(-25, -100, 0),
        new THREE.Vector3(0, -100, 0),
      ],
      true
    )
  );

  return curvePath;
};

export const road = (texture?: string): [THREE.Mesh[], THREE.CurvePath<THREE.Vector3>] => {
  const spline = roadSpine();
  const groundTexture = new THREE.TextureLoader().load("./src/assets/images/track.png");
  //groundTexture.wrapS = groundTexture.wrapT = THREE.RepeatWrapping;
  //groundTexture.repeat.set(10000, 10000);
  //groundTexture.anisotropy = 16;
  //groundTexture.encoding = THREE.sRGBEncoding;

  const segments: THREE.Mesh[] = [];

  spline.curves.forEach((curve) => {
    const step = 4;
    const lengthTotal = curve.getLength();
    const count = Math.ceil(lengthTotal / step);
    const increment = step / lengthTotal;

    const material = new THREE.MeshBasicMaterial({ color: 0x99ffff, map: groundTexture });
    const geometry = roadSegment();
    const flow2 = new InstancedFlow(count, 1, geometry, material);
    flow2.updateCurve(0, curve);
    segments.push(flow2.object3D);

    let i = 0;

    while (i < count) {
      flow2.moveIndividualAlongCurve(i, i * increment);

      i++;
    }
  });

  return [segments, spline];
};

export const getAxisAngle = (up: THREE.Vector3, tangent: THREE.Vector3): [THREE.Vector3, number] => {
  const axis = new THREE.Vector3().crossVectors(up, tangent).normalize();
  const radians = Math.acos(up.dot(tangent));

  return [axis, radians];
};
