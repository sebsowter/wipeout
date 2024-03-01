import * as THREE from "three";
import { InstancedFlow } from "three/examples/jsm/modifiers/CurveModifier.js";

import { mkSimplexNoise } from "./simplex";
import buildingUrl from "../assets/images/building.png";
import pillarUrl from "../assets/images/pillar.png";
import screenUrl from "../assets/images/screenFront.png";
import track1Url from "../assets/images/track1.png";
import track2Url from "../assets/images/track2.png";
import track3Url from "../assets/images/track3.png";
import rock from "../assets/images/rock.png";
import shipTexture from "../assets/images/ship.png";

export const building = (position: THREE.Vector3) => {
  const texture = new THREE.TextureLoader().load(buildingUrl);
  texture.minFilter = THREE.NearestFilter;
  texture.magFilter = THREE.NearestFilter;
  const material = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    map: texture,
  });
  material.map.encoding = THREE.sRGBEncoding;
  const geometry = new THREE.BoxGeometry(16, 16, 16);
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.copy(position);

  return mesh;
};

export const pillar = (position: THREE.Vector3) => {
  const texture = new THREE.TextureLoader().load(pillarUrl);
  texture.minFilter = THREE.NearestFilter;
  texture.magFilter = THREE.NearestFilter;
  const material = new THREE.MeshBasicMaterial({
    transparent: true,
    map: texture,
  });

  const geometry = new THREE.BoxGeometry(2, 12, 2);
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.copy(position);

  return mesh;
};

export const cylinder = (position: THREE.Vector3) => {
  const texture = new THREE.TextureLoader().load(buildingUrl);
  texture.minFilter = THREE.NearestFilter;
  texture.magFilter = THREE.NearestFilter;
  const material = new THREE.MeshBasicMaterial({
    color: 0xcccccc,
    map: texture,
  });

  const geometry = new THREE.SphereGeometry(4, 16, 8);
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.copy(position);

  return mesh;
};

export const overhead = (position: THREE.Vector3) => {
  const texture = new THREE.TextureLoader().load(screenUrl);
  texture.minFilter = THREE.NearestFilter;
  texture.magFilter = THREE.NearestFilter;
  const material = new THREE.MeshBasicMaterial({
    color: 0xcccccc,
    map: texture,
  });

  material.map.encoding = THREE.sRGBEncoding;
  const geometry = new THREE.BoxGeometry(16, 4, 1);
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.copy(position);

  return mesh;
};

export const roadSegmentCorner = () => {
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

export const roadSegmentDefault = () => {
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

export const getTerrain = (imageData: ImageData) => {
  const texture = new THREE.TextureLoader().load(rock);
  //texture.minFilter = THREE.NearestFilter;
  //texture.magFilter = THREE.NearestFilter;
  const material = new THREE.MeshBasicMaterial({
    color: 0x999999,
    map: texture,
  });

  material.map.encoding = THREE.sRGBEncoding;
  const geometry = new THREE.PlaneGeometry(
    imageData.width / 8,
    imageData.height / 8,
    imageData.width / 8,
    imageData.height / 8
  );
  const mesh = new THREE.Mesh(geometry, material);
  mesh.rotateX(-Math.PI / 2);
  mesh.position.set(0, -4, 0);

  const vertex = new THREE.Vector3();
  const positionAttribute = geometry.getAttribute("position");

  const simplex = mkSimplexNoise(() => 0);
  const www = imageData.width;

  for (let i = 0; i < positionAttribute.count; i++) {
    vertex.fromBufferAttribute(positionAttribute, i);

    const x = Math.floor(vertex.x * 8 + imageData.width / 2);
    const y = Math.floor(vertex.y * 8 + imageData.height / 2);
    //console.log("x", x);
    const index = Math.floor(y * www + x) * 4;
    const height = imageData.data[index];
    const r = height / 255;
    const noise = simplex.noise2D(vertex.x / 30, vertex.y / 30);

    positionAttribute.setXYZ(i, vertex.x, vertex.y, vertex.z + r * 1 + noise * 1);
  }

  geometry.attributes.position.needsUpdate = true;
  geometry.computeVertexNormals();

  return mesh;
};

export const roadSpine = () => {
  const curvePath = new THREE.CurvePath<THREE.Vector3>();
  curvePath.add(new THREE.LineCurve3(new THREE.Vector3(16, 0, 0), new THREE.Vector3(16, 0, -32)));
  curvePath.add(
    new THREE.CubicBezierCurve3(
      new THREE.Vector3(16, 0, -32),
      new THREE.Vector3(16, 0, -48),
      new THREE.Vector3(32, 0, -40),
      new THREE.Vector3(32, 0, -56)
    )
  );
  curvePath.add(
    new THREE.CubicBezierCurve3(
      new THREE.Vector3(32, 0, -56),
      new THREE.Vector3(32, 0, -72),
      new THREE.Vector3(32, 2, -72),
      new THREE.Vector3(32, 2, -88)
    )
  );
  curvePath.add(
    new THREE.CubicBezierCurve3(
      new THREE.Vector3(32, 2, -88),
      new THREE.Vector3(32, 2, -100),
      new THREE.Vector3(16, 2, -100),
      new THREE.Vector3(16, 2, -88)
    )
  );
  curvePath.add(
    new THREE.CatmullRomCurve3(
      [
        new THREE.Vector3(16, 2, -88),
        new THREE.Vector3(16, 2, -80),
        new THREE.Vector3(0, 2, -64),
        new THREE.Vector3(0, 2, -48),
        new THREE.Vector3(-32, 6, -16),
        new THREE.Vector3(-24, 6, 16),
        new THREE.Vector3(-32, 6, 64),
        new THREE.Vector3(-24, 8, 72),
        new THREE.Vector3(-8, 8, 72),
      ],
      false
    )
  );
  curvePath.add(
    new THREE.CubicBezierCurve3(
      new THREE.Vector3(-8, 8, 72),
      new THREE.Vector3(8, 8, 72),
      new THREE.Vector3(8, 8, 96),
      new THREE.Vector3(24, 8, 96)
    )
  );
  curvePath.add(new THREE.LineCurve3(new THREE.Vector3(24, 8, 96), new THREE.Vector3(32, 8, 96)));
  curvePath.add(
    new THREE.CubicBezierCurve3(
      new THREE.Vector3(32, 8, 96),
      new THREE.Vector3(48, 8, 96),
      new THREE.Vector3(48, 4, 64),
      new THREE.Vector3(32, 4, 64)
    )
  );
  curvePath.add(
    new THREE.CubicBezierCurve3(
      new THREE.Vector3(32, 4, 64),
      new THREE.Vector3(16, 4, 64),
      new THREE.Vector3(16, 0, 64),
      new THREE.Vector3(16, 0, 32)
    )
  );
  curvePath.add(new THREE.LineCurve3(new THREE.Vector3(16, 0, 32), new THREE.Vector3(16, 0, 0)));

  return curvePath;
};

export const road = (spline: THREE.CurvePath<THREE.Vector3>) => {
  const object3D = new THREE.Object3D();
  object3D.add(building(new THREE.Vector3(0, 4, 32)));
  object3D.add(building(new THREE.Vector3(0, 0, 0)));
  object3D.add(building(new THREE.Vector3(32, 0, 0)));
  object3D.add(building(new THREE.Vector3(32, 4, 32)));
  object3D.add(overhead(new THREE.Vector3(0, 4, -32)));
  object3D.add(cylinder(new THREE.Vector3(8, 2, -88)));
  object3D.add(pillar(new THREE.Vector3(9, 0, -32)));
  object3D.add(pillar(new THREE.Vector3(-9, 0, -32)));

  const defaultGeometry = roadSegmentDefault();
  const cornerGeometry = roadSegmentCorner();
  const groundTexture1 = new THREE.TextureLoader().load(track1Url);
  const groundTexture2 = new THREE.TextureLoader().load(track2Url);
  const groundTexture3 = new THREE.TextureLoader().load(track3Url);

  groundTexture1.minFilter = THREE.NearestFilter;
  groundTexture1.magFilter = THREE.NearestFilter;
  groundTexture2.minFilter = THREE.NearestFilter;
  groundTexture2.magFilter = THREE.NearestFilter;
  groundTexture3.minFilter = THREE.NearestFilter;
  groundTexture3.magFilter = THREE.NearestFilter;

  const material1 = new THREE.MeshBasicMaterial({
    color: 0x99bbcc,
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

  material1.map.encoding = THREE.sRGBEncoding;
  material2.map.encoding = THREE.sRGBEncoding;
  material3.map.encoding = THREE.sRGBEncoding;
  const start = 23;
  const step = 4;
  const splineLength = spline.getLength();
  const stepCount = splineLength / step;
  const stepCountRounded = Math.ceil(stepCount);
  const increment = 1 / stepCountRounded;
  console.log("splineLength", splineLength);
  console.log("stepCountRounded", stepCountRounded);

  [
    new InstancedFlow(stepCountRounded, 1, defaultGeometry, material1),
    new InstancedFlow(stepCountRounded, 1, cornerGeometry, material2),
    new InstancedFlow(stepCountRounded, 1, defaultGeometry, material3),
  ].forEach((flow, index) => {
    flow.updateCurve(0, spline);

    if (index === 0) {
      for (let i = 0; i < 43; i++) {
        flow.moveIndividualAlongCurve(i, ((start + i) * increment) % stepCountRounded);
      }

      for (let i = 51; i < 71; i++) {
        flow.moveIndividualAlongCurve(i, ((start + i) * increment) % stepCountRounded);
      }

      for (let i = 79; i < stepCountRounded; i++) {
        flow.moveIndividualAlongCurve(i, ((start + i) * increment) % stepCountRounded);
      }
    }

    if (index === 1) {
      for (let i = 71; i < 79; i++) {
        flow.moveIndividualAlongCurve(i, ((start + i) * increment) % stepCountRounded);
      }
    }

    if (index === 2) {
      for (let i = 43; i < 51; i++) {
        flow.moveIndividualAlongCurve(i, ((start + i) * increment) % stepCountRounded);
      }
    }

    object3D.add(flow.object3D);
  });

  return object3D;
};
