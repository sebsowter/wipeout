import * as THREE from "three";
import { InstancedFlow } from "three/examples/jsm/modifiers/CurveModifier.js";

export const building = () => {
  const groundTexture3 = new THREE.TextureLoader().load("./src/assets/images/building.png");

  const material = new THREE.MeshBasicMaterial({
    color: 0x999999,
    map: groundTexture3,
  });

  const geometry = new THREE.BoxGeometry(16, 16, 16);
  const mesh = new THREE.Mesh(geometry, material);

  return mesh;
};

export const signinmg = () => {
  const groundTexture3 = new THREE.TextureLoader().load("./src/assets/images/track3.png");

  const material = new THREE.MeshBasicMaterial({
    color: 0x999999,
    map: groundTexture3,
  });

  const geometry = new THREE.BoxGeometry(16, 4, 1);
  const mesh = new THREE.Mesh(geometry, material);

  return mesh;
};

export const roadSegment1 = () => {
  const flowsX = 16;
  const flowsY = 16;
  const geometry = new THREE.PlaneGeometry(8, 4, flowsX, flowsY);
  const vertex = new THREE.Vector3();
  const positionAttribute = geometry.attributes.position;

  for (let i = 0; i < positionAttribute.count; i++) {
    vertex.fromBufferAttribute(positionAttribute, i);

    const indexX = i % (flowsX + 1);

    let z = 0;
    let x = vertex.x;

    if (indexX < 4 || indexX === 13) {
      z = 0.5;
    }

    if (indexX === 14) {
      z = 1.4;
      x = 2;
    }

    if (indexX === 15) {
      z = 1.5;
      x = 2;
    }

    if (indexX === 16) {
      z = 1.5;
      x = 2.5;
    }

    if (indexX > 16) {
      z = 0;
      x = 2.5;
    }

    positionAttribute.setXYZ(i, x, vertex.y, z);
  }

  geometry.rotateX(Math.PI / 2).rotateY(Math.PI / 2);
  geometry.attributes.position.needsUpdate = true;
  geometry.computeVertexNormals();

  return geometry;
};

export const roadSegment = () => {
  const flowsX = 16;
  const flowsY = 16;
  const geometry = new THREE.PlaneGeometry(8, 4, flowsX, flowsY);
  const vertex = new THREE.Vector3();
  const positionAttribute = geometry.attributes.position;

  for (let i = 0; i < positionAttribute.count; i++) {
    vertex.fromBufferAttribute(positionAttribute, i);

    const indexX = i % (flowsX + 1);

    let z = 0;
    let x = vertex.x;

    if (indexX === 2 || indexX === 3 || indexX === 13 || indexX === 14) {
      z = 0.5;
    }

    if (indexX === 1 || indexX === 15) {
      z = 0;
    }

    if (indexX === 0 || indexX === 16) {
      z = 0;
      x = 0;
    }

    positionAttribute.setXYZ(i, x, vertex.y, z);
  }

  geometry.rotateX(Math.PI / 2).rotateY(Math.PI / 2);
  geometry.attributes.position.needsUpdate = true;
  geometry.computeVertexNormals();

  return geometry;
};

export const roadSpine = () => {
  const curvePath = new THREE.CurvePath<THREE.Vector3>();
  curvePath.add(new THREE.LineCurve3(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, -32)));
  curvePath.add(
    new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(0, 0, -32),
      new THREE.Vector3(0, 0, -40),
      new THREE.Vector3(8, 0, -40)
    )
  );
  curvePath.add(
    new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(8, 0, -40),
      new THREE.Vector3(16, 0, -40),
      new THREE.Vector3(16, 0, -48)
    )
  );
  curvePath.add(
    new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(16, 0, -48),
      new THREE.Vector3(16, 0, -58),
      new THREE.Vector3(16, 1, -68)
    )
  );
  curvePath.add(
    new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(16, 1, -68),
      new THREE.Vector3(16, 2, -78),
      new THREE.Vector3(16, 2, -88)
    )
  );
  curvePath.add(
    new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(16, 2, -88),
      new THREE.Vector3(16, 2, -96),
      new THREE.Vector3(8, 2, -96)
    )
  );
  curvePath.add(
    new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(8, 2, -96),
      new THREE.Vector3(0, 2, -96),
      new THREE.Vector3(0, 2, -88)
    )
  );
  curvePath.add(
    new THREE.CatmullRomCurve3(
      [
        new THREE.Vector3(0, 2, -88),
        new THREE.Vector3(0, 2, -72),
        new THREE.Vector3(-4, 1, -64),
        new THREE.Vector3(-16, 1, -48),
        new THREE.Vector3(-32, 2, -32),
        new THREE.Vector3(-32, 4, 0),
        new THREE.Vector3(-32, 8, 20),
        new THREE.Vector3(-32, 8, 32),
      ],
      false
    )
  );
  curvePath.add(
    new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(-32, 8, 32),
      new THREE.Vector3(-32, 8, 48),
      new THREE.Vector3(-16, 8, 48)
    )
  );
  curvePath.add(
    new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(-16, 8, 48),
      new THREE.Vector3(0, 8, 48),
      new THREE.Vector3(0, 8, 32)
    )
  );
  curvePath.add(
    new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(0, 8, 32),
      new THREE.Vector3(0, 8, 28),
      new THREE.Vector3(0, 4, 24)
    )
  );
  curvePath.add(
    new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(0, 4, 24),
      new THREE.Vector3(0, 0, 20),
      new THREE.Vector3(0, 0, 16)
    )
  );
  curvePath.add(new THREE.LineCurve3(new THREE.Vector3(0, 0, 16), new THREE.Vector3(0, 0, 0)));

  return curvePath;
};

export const road = (scene: THREE.Scene, texture?: string): [InstancedFlow[], THREE.CurvePath<THREE.Vector3>] => {
  const spline = roadSpine();
  const byi = building();
  byi.position.set(-16, 8, 32);
  scene.add(byi);
  const by2 = building();
  by2.position.set(-16, 0, 0);
  scene.add(by2);
  const by3 = building();
  by3.position.set(16, 0, 0);
  scene.add(by3);
  const by4 = building();
  by4.position.set(16, 8, 32);
  scene.add(by4);

  const by5 = signinmg();
  by5.position.set(0, 4, 0);
  scene.add(by5);

  const by6 = signinmg();
  by6.position.set(0, 4, -32);
  scene.add(by6);

  const geometry = roadSegment();
  const geometry1 = roadSegment1();
  const groundTexture1 = new THREE.TextureLoader().load("./src/assets/images/track1.png");
  const groundTexture2 = new THREE.TextureLoader().load("./src/assets/images/track2.png");
  const groundTexture3 = new THREE.TextureLoader().load("./src/assets/images/track3.png");
  const flows: InstancedFlow[] = [];
  groundTexture1.minFilter = THREE.NearestFilter;
  groundTexture1.magFilter = THREE.NearestFilter;
  groundTexture2.minFilter = THREE.NearestFilter;
  groundTexture2.magFilter = THREE.NearestFilter;
  groundTexture3.minFilter = THREE.NearestFilter;
  groundTexture3.magFilter = THREE.NearestFilter;

  const material1 = new THREE.MeshBasicMaterial({
    color: 0x999999,
    map: groundTexture1,
  });
  const material2 = new THREE.MeshBasicMaterial({
    color: 0xcccccc,
    map: groundTexture2,
  });
  const material3 = new THREE.MeshBasicMaterial({
    color: 0xcccccc,
    map: groundTexture3,
  });

  const step = 4;
  const splineLength = spline.getLength();
  console.log("splineLength", splineLength);
  const stepCount = splineLength / step;
  const stepCountRounded = Math.ceil(stepCount);
  const increment = stepCountRounded / splineLength;
  const inc = 1 / stepCountRounded;
  console.log("stepCountRounded", stepCountRounded);

  const flow2 = new InstancedFlow(stepCountRounded, 1, geometry, material1);
  //flow2.updateCurve(0, spline);
  flows.push(flow2);

  const flow3 = new InstancedFlow(stepCountRounded, 1, geometry1, material2);
  //flow3.updateCurve(0, spline);
  flows.push(flow3);

  const flow4 = new InstancedFlow(stepCountRounded, 1, geometry, material3);
  //flow3.updateCurve(0, spline);
  flows.push(flow4);

  const starts = [0, 8, 16, 24, 32, 80];

  flows.forEach((flow, index) => {
    //spline.curves.forEach((curve, index) => {
    //const increment = curveTotal / 20;

    flow.updateCurve(0, spline);
    //flows.push( flow.0 );
    //});
    scene.add(flow.object3D);

    //const curveLength = curve.getLength();
    //const curveStepCount = curveLength / step;

    if (index === 0) {
      for (let i = 0; i < 43; i++) {
        //flow.setCurve(i, 0);
        flow.moveIndividualAlongCurve(i, i * inc);
        //flow.object3D.setColorAt(i, new THREE.Color(0xffffff * Math.random()));
      }

      for (let i = 51; i < 71; i++) {
        //flow.setCurve(i, 0);
        flow.moveIndividualAlongCurve(i, i * inc);
        //flow.object3D.setColorAt(i, new THREE.Color(0xffffff * Math.random()));
      }

      for (let i = 79; i < stepCountRounded; i++) {
        //flow.setCurve(i, 0);
        flow.moveIndividualAlongCurve(i, i * inc);
        //flow.object3D.setColorAt(i, new THREE.Color(0xffffff * Math.random()));
      }
    }

    if (index === 1) {
      for (let i = 71; i < 79; i++) {
        //flow.setCurve(i, 0);
        flow.moveIndividualAlongCurve(i, i * inc);
        //flow.object3D.setColorAt(i, new THREE.Color(0xffffff * Math.random()));
      }
    }

    if (index === 2) {
      for (let i = 43; i < 51; i++) {
        //flow.setCurve(i, 0);
        flow.moveIndividualAlongCurve(i, i * inc);
        //flow.object3D.setColorAt(i, new THREE.Color(0xffffff * Math.random()));
      }
    }

    //if ((ii + index) % 2 === 0) {
    //for (let i = 0; i < Math.ceil(curve.getLength() / 4); i++) {
    // flow.moveIndividualAlongCurve(i, i * 4);
    //}

    /*
    for (let i = 0; i < count; i++) {
      const curveIndex = i % spline.curves.length;
      flow.setCurve(i, curveIndex);
      flow.moveIndividualAlongCurve(i, curveIndex * 4);
      flow.object3D.setColorAt(i, new THREE.Color(0xffffff * Math.random()));
    }
    */
    //}
  });

  /*
  spline.curves.forEach((curve) => {
    const lengthTotal = curve.getLength();
    const count = Math.ceil(lengthTotal / step);
    const increment = step / lengthTotal;

    const material = new THREE.MeshBasicMaterial({
      color: 0x99ffff,
      map: groundTexture,
    });
    const flow = new InstancedFlow(count, 1, geometry, material);
    flow.updateCurve(0, curve);

    for (let i = 0; i < count; i++) {
      flow.moveIndividualAlongCurve(i, i * increment);
    }

    flows.push(flow);
  });
  */

  return [flows, spline];
};

export const getAxisAngle = (up: THREE.Vector3, tangent: THREE.Vector3): [THREE.Vector3, number] => {
  const axis = new THREE.Vector3().crossVectors(up, tangent).normalize();
  const radians = Math.acos(up.dot(tangent));
  // const radians2 = Math.atan2(-forward.x, -forward.z);

  return [axis, radians];
};
