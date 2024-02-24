import * as THREE from "three";
import { InstancedFlow } from "three/examples/jsm/modifiers/CurveModifier.js";

export const roadSegment = () => {
  const flowsX = 16;
  const flowsY = 16;
  const geometry = new THREE.PlaneGeometry(8, 4, flowsX, flowsY);
  const vertex = new THREE.Vector3();
  const positionAttribute = geometry.attributes.position;

  for (let i = 0; i < positionAttribute.count; i++) {
    vertex.fromBufferAttribute(positionAttribute, i);

    const z = i % (flowsX + 1) < Math.round(flowsX * 0.25) || i % (flowsX + 1) > Math.round(flowsX * 0.75) ? 0.5 : 0;

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
        new THREE.Vector3(0, 0, -75),
        new THREE.Vector3(0, 0, 75),
        new THREE.Vector3(0, 0, 102),
        new THREE.Vector3(-25, 0, 101),
        new THREE.Vector3(-50, 5, 75),
        new THREE.Vector3(-50, 20, 50),
        new THREE.Vector3(-50, 20, -50),
        new THREE.Vector3(-53, 5, -75),
        new THREE.Vector3(-25, 0, -100),
        new THREE.Vector3(0, 0, -100),
      ],
      true,
      "chordal",
      0
    )
  );

  return curvePath;
};

export const road = (texture?: string): [InstancedFlow[], THREE.CurvePath<THREE.Vector3>] => {
  const spline = roadSpine();
  const groundTexture = new THREE.TextureLoader().load("./src/assets/images/track.png");
  const flows: InstancedFlow[] = [];

  console.log("spline.curves", spline.curves.length);

  spline.curves.forEach((curve) => {
    const step = 4;
    const lengthTotal = curve.getLength();
    const count = Math.ceil(lengthTotal / step);
    const increment = step / lengthTotal;

    const material = new THREE.MeshBasicMaterial({
      color: 0x99ffff,
      map: groundTexture,
    });
    const geometry = roadSegment();
    const flow = new InstancedFlow(count, 1, geometry, material);
    flow.updateCurve(0, curve);

    for (let i = 0; i < count; i++) {
      flow.moveIndividualAlongCurve(i, i * increment);
    }

    flows.push(flow);
  });

  return [flows, spline];
};

export const getAxisAngle = (up: THREE.Vector3, tangent: THREE.Vector3): [THREE.Vector3, number] => {
  const axis = new THREE.Vector3().crossVectors(up, tangent).normalize();
  const radians = Math.acos(up.dot(tangent));
  // const radians2 = Math.atan2(-forward.x, -forward.z);

  return [axis, radians];
};
