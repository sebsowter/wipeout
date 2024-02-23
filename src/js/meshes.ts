import * as THREE from "three";

export const roadSegment = (texture?: string) => {
  const geometry = new THREE.PlaneGeometry(5, 10, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const mesh = new THREE.Mesh(geometry, material);

  return mesh;
};

export const roadSpine = (texture?: string) => {
  /*
  const curve = new THREE.SplineCurve([
    new THREE.Vector2(0, 0),
    new THREE.Vector2(0, -50),
    new THREE.Vector2(50, -50),
    new THREE.Vector2(100, -50),
    new THREE.Vector2(100, 50),
    new THREE.Vector2(50, 50),
    new THREE.Vector2(0, 50),
    new THREE.Vector2(0, 0),
  ]);
  */

  /*
  const curvePath = new THREE.Path();
  curvePath.add(new THREE.Path([new THREE.Vector2(-25, 50), new THREE.Vector2(-25, -50)]));
  curvePath.add(new THREE.EllipseCurve(0, -50, 25, 25, Math.PI, 0));
  curvePath.add(new THREE.Path([new THREE.Vector2(25, -50), new THREE.Vector2(25, 50)]));
  curvePath.add(new THREE.EllipseCurve(0, 50, 25, 25, 0, Math.PI));
  */

  const curvePath = new THREE.CurvePath<THREE.Vector3>();
  curvePath.add(
    new THREE.CatmullRomCurve3([
      new THREE.Vector3(-50, -50, 0),
      new THREE.Vector3(0, -100, 10),
      new THREE.Vector3(50, -50, 20),
    ])
  );
  curvePath.add(
    new THREE.CatmullRomCurve3([
      new THREE.Vector3(50, -50, 20),
      new THREE.Vector3(100, 0, 10),
      new THREE.Vector3(50, 50, 0),
    ])
  );
  curvePath.add(
    new THREE.CatmullRomCurve3([
      new THREE.Vector3(50, 50, 0),
      new THREE.Vector3(0, 100, -10),
      new THREE.Vector3(-50, 50, -20),
    ])
  );
  curvePath.add(
    new THREE.CatmullRomCurve3([
      new THREE.Vector3(-50, 50, -20),
      new THREE.Vector3(-100, 0, -10),
      new THREE.Vector3(-50, -50, 0),
    ])
  );
  //curvePath.add(new THREE.CatmullRomCurve3([new THREE.Vector3(-25, -50, 0), new THREE.Vector3(25, -50, 0)]));
  //curvePath.add(new THREE.Path([new THREE.Vector2(-25, 50), new THREE.Vector2(-25, -50)]));
  //curvePath.add(new THREE.EllipseCurve(0, -50, 25, 25, Math.PI, 0));
  //curvePath.add(new THREE.CatmullRomCurve3([new THREE.Vector3(25, -50, 0), new THREE.Vector3(25, 50, 0)]));
  //curvePath.add(new THREE.CatmullRomCurve3([new THREE.Vector3(25, -50, 0), new THREE.Vector3(-25, 50, 0)]));
  //curvePath.add(new THREE.Path([new THREE.Vector2(25, -50), new THREE.Vector2(25, 50)]));
  //curvePath.add(new THREE.EllipseCurve(0, 50, 25, 25, 0, Math.PI));

  return curvePath;
};

export const road = (texture?: string): [THREE.Mesh[], THREE.CurvePath<THREE.Vector3>] => {
  const spline = roadSpine();

  const segments: THREE.Mesh[] = [];

  spline.curves.forEach((curve) => {
    const step = 5;
    const lengthTotal = curve.getLength();
    const count = Math.ceil(lengthTotal / step);
    const increment = step / lengthTotal;

    let i = 0;

    while (i < count) {
      const position = i * increment;
      const point = curve.getPointAt(position);
      const tangent = curve.getTangentAt(position);
      const segment = roadSegment();
      segment.position.copy(point);

      const tangent2 = curve.getTangentAt(position).normalize();

      const up = new THREE.Vector3(0, 1, 0);
      const axis = new THREE.Vector3().crossVectors(up, tangent2).normalize();
      const radians = Math.acos(up.dot(tangent2));

      segment.quaternion.setFromAxisAngle(axis, radians);

      segments.push(segment);

      i++;
    }
  });

  return [segments, spline];
};
