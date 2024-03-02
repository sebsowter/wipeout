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
import displacement from "../assets/images/displacement.png";
import collisionMap from "../assets/images/collision.png";
import { getRoadColors } from "./utils";

export const getHeightMap = () => {
  return new Promise<ImageData>((resolve, reject) => {
    new THREE.TextureLoader().load(
      displacement,
      function (texture) {
        const canvas = document.createElement("canvas");
        canvas.width = texture.image.width;
        canvas.height = texture.image.height;

        const context = canvas.getContext("2d");
        context.drawImage(texture.image, 0, 0);

        resolve(context.getImageData(0, 0, canvas.width, canvas.height));
      },
      undefined,
      function () {
        reject();
      }
    );
  });
};

export const getCollisionMap = () => {
  return new Promise<ImageData>((resolve, reject) => {
    new THREE.TextureLoader().load(
      collisionMap,
      function (texture) {
        const canvas = document.createElement("canvas");
        canvas.width = texture.image.width;
        canvas.height = texture.image.height;

        const context = canvas.getContext("2d");
        context.drawImage(texture.image, 0, 0);

        resolve(context.getImageData(0, 0, canvas.width, canvas.height));
      },
      undefined,
      function () {
        reject();
      }
    );
  });
};

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
  const object3d = new THREE.Object3D();
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
  mesh.position.set(position.x, position.y + 4, position.z);

  object3d.add(pillar(new THREE.Vector3(position.x + 9, position.y, position.z)));
  object3d.add(pillar(new THREE.Vector3(position.x - 9, position.y, position.z)));
  object3d.add(mesh);

  return object3d;
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

export const roadSegmentTunnel = () => {
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

  for (let i = 0; i < positionAttribute.count; i++) {
    vertex.fromBufferAttribute(positionAttribute, i);

    const x = Math.floor(vertex.x * 8 + imageData.width / 2);
    const y = Math.floor(vertex.y * 8 + imageData.height / 2);
    const index = Math.floor(y * imageData.width + x) * 4;
    const height = imageData.data[index];
    const r = height / 255;
    const noise = simplex.noise2D(vertex.x / 30, vertex.y / 30);

    positionAttribute.setXYZ(i, vertex.x, vertex.y, vertex.z + r * 16 + noise * 4);
  }

  geometry.attributes.position.needsUpdate = true;
  geometry.computeVertexNormals();

  return mesh;
};

export const getRoadCurve = () => {
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
        new THREE.Vector3(0, 3, -64),
        new THREE.Vector3(0, 5, -48),
        new THREE.Vector3(-32, 4, -16),
        new THREE.Vector3(-24, 6, 16),
        new THREE.Vector3(-24, 8, 48),
        new THREE.Vector3(-24, 8, 56),
      ],
      false
    )
  );
  curvePath.add(
    new THREE.CubicBezierCurve3(
      new THREE.Vector3(-24, 8, 56),
      new THREE.Vector3(-24, 8, 64),
      new THREE.Vector3(-16, 7, 72),
      new THREE.Vector3(-8, 7, 72)
    )
  );
  curvePath.add(
    new THREE.CubicBezierCurve3(
      new THREE.Vector3(-8, 7, 72),
      new THREE.Vector3(8, 7, 72),
      new THREE.Vector3(8, 8, 96),
      new THREE.Vector3(24, 8, 96)
    )
  );
  curvePath.add(new THREE.LineCurve3(new THREE.Vector3(24, 8, 96), new THREE.Vector3(32, 8, 96)));
  curvePath.add(
    new THREE.CubicBezierCurve3(
      new THREE.Vector3(32, 8, 96),
      new THREE.Vector3(48, 8, 96),
      new THREE.Vector3(48, 4, 72),
      new THREE.Vector3(32, 4, 72)
    )
  );
  curvePath.add(
    new THREE.CubicBezierCurve3(
      new THREE.Vector3(32, 4, 72),
      new THREE.Vector3(8, 4, 72),
      new THREE.Vector3(16, 0, 48),
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
  object3D.add(overhead(new THREE.Vector3(16, 0, -32)));
  object3D.add(overhead(new THREE.Vector3(32, 2, -72)));
  object3D.add(overhead(new THREE.Vector3(0, 5, -48)));
  object3D.add(overhead(new THREE.Vector3(-24, 8, 48)));
  object3D.add(overhead(new THREE.Vector3(32, 4, 72)).rotateY(0.2));
  object3D.add(cylinder(new THREE.Vector3(8, 2, -88)));
  object3D.receiveShadow = true;
  const defaultGeometry = roadSegmentDefault();
  const cornerGeometry = roadSegmentCorner();
  const tunnelGeometry = roadSegmentTunnel();
  const groundTexture1 = new THREE.TextureLoader().load(track1Url);
  const groundTexture2 = new THREE.TextureLoader().load(track2Url);
  const groundTexture3 = new THREE.TextureLoader().load(track3Url);
  const groundTexture4 = new THREE.TextureLoader().load(track3Url);

  groundTexture1.minFilter = THREE.NearestFilter;
  groundTexture1.magFilter = THREE.NearestFilter;
  groundTexture2.minFilter = THREE.NearestFilter;
  groundTexture2.magFilter = THREE.NearestFilter;
  groundTexture3.minFilter = THREE.NearestFilter;
  groundTexture3.magFilter = THREE.NearestFilter;
  groundTexture4.minFilter = THREE.NearestFilter;
  groundTexture4.magFilter = THREE.NearestFilter;

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
  const material4 = new THREE.MeshBasicMaterial({
    color: 0xcccccc,
    map: groundTexture4,
  });

  material1.map.encoding = THREE.sRGBEncoding;
  material2.map.encoding = THREE.sRGBEncoding;
  material3.map.encoding = THREE.sRGBEncoding;
  material4.map.encoding = THREE.sRGBEncoding;

  const start = 34;
  const step = 4;
  const splineLength = spline.getLength();
  const stepCount = splineLength / step;
  const stepCountRounded = Math.ceil(stepCount);
  const increment = 1 / stepCount;
  const colors = getRoadColors(stepCountRounded);
  console.log("stepCountRounded", stepCountRounded);

  [
    new InstancedFlow(stepCountRounded, 1, defaultGeometry, material1),
    new InstancedFlow(stepCountRounded, 1, cornerGeometry, material2),
    new InstancedFlow(stepCountRounded, 1, defaultGeometry, material3),
    new InstancedFlow(stepCountRounded, 1, tunnelGeometry, material4),
  ].forEach((flow, index) => {
    flow.updateCurve(0, spline);

    if (index === 0) {
      for (let i = 0; i < 43; i++) {
        flow.moveIndividualAlongCurve(i, ((start + i) * increment) % stepCountRounded);
        flow.object3D.setColorAt(i, colors[(start + i) % colors.length]);
      }

      for (let i = 51; i < 71; i++) {
        flow.moveIndividualAlongCurve(i, ((start + i) * increment) % stepCountRounded);
        flow.object3D.setColorAt(i, colors[(start + i) % colors.length]);
      }

      for (let i = 79; i < 92; i++) {
        flow.moveIndividualAlongCurve(i, ((start + i) * increment) % stepCountRounded);
        flow.object3D.setColorAt(i, colors[(start + i) % colors.length]);
      }

      for (let i = 102; i < stepCountRounded; i++) {
        flow.moveIndividualAlongCurve(i, ((start + i) * increment) % stepCountRounded);
        flow.object3D.setColorAt(i, colors[(start + i) % colors.length]);
      }
    }

    if (index === 1) {
      for (let i = 71; i < 79; i++) {
        flow.moveIndividualAlongCurve(i, ((start + i) * increment) % stepCountRounded);
        flow.object3D.setColorAt(i, colors[(start + i) % colors.length]);
      }
    }

    if (index === 2) {
      for (let i = 43; i < 51; i++) {
        flow.moveIndividualAlongCurve(i, ((start + i) * increment) % stepCountRounded);
        flow.object3D.setColorAt(i, colors[(start + i) % colors.length]);
      }
    }

    if (index === 3) {
      for (let i = 92; i < 102; i++) {
        flow.moveIndividualAlongCurve(i, ((start + i) * increment) % stepCountRounded);
        flow.object3D.setColorAt(i, colors[(start + i) % colors.length]);
      }
    }

    object3D.add(flow.object3D);
  });

  return object3D;
};
