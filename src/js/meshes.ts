import * as THREE from "three";
import { InstancedFlow } from "three/examples/jsm/modifiers/CurveModifier.js";

import { mkSimplexNoise } from "./simplex";
import buildingUrl from "../assets/images/building.png";
import pillarUrl from "../assets/images/pillar.png";
import screenUrl from "../assets/images/screenFront.png";
import screen2 from "../assets/images/screen2.png";
import screen3 from "../assets/images/screen3.png";
import screen4 from "../assets/images/screen4.png";
import track1Url from "../assets/images/track1.png";
import track2Url from "../assets/images/track2.png";
import track3Url from "../assets/images/track3.png";
import track4Url from "../assets/images/track4.png";
import track5Url from "../assets/images/track5.png";
import standUrl from "../assets/images/stand.png";
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
  const object = new THREE.Object3D();
  object.position.copy(position);

  const texture = new THREE.TextureLoader().load(standUrl);
  texture.minFilter = THREE.NearestFilter;
  texture.magFilter = THREE.NearestFilter;

  const material2 = new THREE.MeshBasicMaterial({
    color: 0x111111,
    //map: texture,
  });

  const material3 = new THREE.MeshBasicMaterial({
    color: 0x000000,
    //map: texture,
  });

  const materialBlack = new THREE.MeshBasicMaterial({
    color: 0x000000,
    //map: texture,
  });

  const material = new THREE.MeshBasicMaterial({
    color: 0x333333,
    //map: texture,
    //side: THREE.DoubleSide,
  });
  //material.map.encoding = THREE.sRGBEncoding;

  const geometry2 = new THREE.PlaneGeometry(32, 2);
  const geometry3 = new THREE.PlaneGeometry(32, 6);

  const geometry = new THREE.BoxGeometry(12, 12, 32);

  const vertex = new THREE.Vector3();
  const positionAttribute = geometry.getAttribute("position");
  const simplex = mkSimplexNoise(() => 0);

  //console.log("positionAttribute", positionAttribute);

  for (let i = 0; i < positionAttribute.count; i++) {
    vertex.fromBufferAttribute(positionAttribute, i);
    //console.log("vertex", vertex);

    if (vertex.x > 0 && vertex.y > 0) {
      vertex.y = -2;
    }

    positionAttribute.setXYZ(i, vertex.x, vertex.y, vertex.z);
  }

  geometry.attributes.position.needsUpdate = true;
  geometry.computeVertexNormals();

  const mesh = new THREE.Mesh(geometry, [
    materialBlack,
    materialBlack,
    material,
    materialBlack,
    materialBlack,
    materialBlack,
  ]);
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

  return object;
};

export const pillar = (position: THREE.Vector3) => {
  const texture = new THREE.TextureLoader().load(pillarUrl);
  texture.minFilter = THREE.NearestFilter;
  texture.magFilter = THREE.NearestFilter;

  const material = new THREE.MeshBasicMaterial({
    transparent: true,
    map: texture,
  });

  const geometry = new THREE.BoxGeometry(1, 12, 1);

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

export const overhead = (position: THREE.Vector3, imageUrl = screenUrl) => {
  const object3d = new THREE.Object3D();
  const texture = new THREE.TextureLoader().load(imageUrl);
  texture.minFilter = THREE.NearestFilter;
  texture.magFilter = THREE.NearestFilter;

  const material = new THREE.MeshBasicMaterial({
    color: 0xcccccc,
    map: texture,
    side: THREE.DoubleSide,
  });
  material.map.encoding = THREE.sRGBEncoding;

  const geometry = new THREE.PlaneGeometry(10, 4, 1, 1);

  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(position.x, position.y + 4, position.z);

  object3d.add(pillar(new THREE.Vector3(position.x + 5.5, position.y, position.z)));
  object3d.add(pillar(new THREE.Vector3(position.x - 5.5, position.y, position.z)));
  object3d.add(pillar(new THREE.Vector3(position.x, position.y + 6.5, position.z)).rotateZ(Math.PI / 2));
  object3d.add(mesh);

  return object3d;
};

export const roadSegmentCorner = () => {
  const flowsX = 16;
  const flowsY = 8;
  const geometry = new THREE.PlaneGeometry(8, 4, flowsX, flowsY);
  const vertex = new THREE.Vector3();
  const positionAttribute = geometry.attributes.position;

  for (let i = 0; i < positionAttribute.count; i++) {
    vertex.fromBufferAttribute(positionAttribute, i);

    const indexX = i % (flowsX + 1);

    let z = vertex.z;
    let x = vertex.x;

    if (indexX === 0) {
      x = 1.6;
      z = -0.5;
    }

    if (indexX === 1) {
      x = -1.6;
      z = -0.5;
    }

    if (indexX === 2) {
      x = -2.6;
      z = 0.5;
    }

    if (indexX === 3) {
      x = -2.5;
      z = 0.5;
    }

    if (indexX === 13) {
      x = 2.5;
      z = 0.5;
    }

    if (indexX === 14) {
      x = 2;
      z = 2;
    }

    if (indexX === 15) {
      x = 2.6;
      z = 0.5;
    }

    if (indexX === 16) {
      x = 1.6;
      z = -0.5;
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
  const flowsY = 8;
  const geometry = new THREE.PlaneGeometry(8, 4, flowsX, flowsY);
  const vertex = new THREE.Vector3();
  const positionAttribute = geometry.attributes.position;

  for (let i = 0; i < positionAttribute.count; i++) {
    vertex.fromBufferAttribute(positionAttribute, i);

    const indexX = i % (flowsX + 1);

    let z = vertex.z;
    let x = vertex.x;

    if (indexX === 0) {
      x = 0;
      z = 2;
    }

    if (indexX === 1) {
      x = -2;
      z = 2;
    }

    if (indexX === 2) {
      x = -2.25;
      z = 1.25;
    }

    if (indexX === 3) {
      x = -2.5;
      z = 0.5;
    }

    if (indexX === 13) {
      x = 2.5;
      z = 0.5;
    }

    if (indexX === 14) {
      x = 2.25;
      z = 1.25;
    }

    if (indexX === 15) {
      x = 2;
      z = 2;
    }

    if (indexX === 16) {
      x = 0;
      z = 2;
    }

    positionAttribute.setXYZ(i, x, vertex.y, z);
  }

  geometry.rotateX(Math.PI / 2).rotateY(Math.PI / 2);
  geometry.attributes.position.needsUpdate = true;
  geometry.computeVertexNormals();

  return geometry;
};

export const roadSegmentDefault = (length = 8) => {
  const flowsX = 16;
  const flowsY = 8;
  const geometry = new THREE.PlaneGeometry(8, 4, flowsX, flowsY);
  const vertex = new THREE.Vector3();
  const positionAttribute = geometry.attributes.position;

  for (let i = 0; i < positionAttribute.count; i++) {
    vertex.fromBufferAttribute(positionAttribute, i);

    const indexX = i % (flowsX + 1);

    let z = vertex.z;
    let x = vertex.x;

    if (indexX === 0) {
      x = 0;
      z = -0.5;
    }

    if (indexX === 1) {
      x = -1.6;
      z = -0.5;
    }

    if (indexX === 2) {
      x = -2.6;
      z = 0.5;
    }

    if (indexX === 3) {
      x = -2.5;
      z = 0.5;
    }

    if (indexX === 13) {
      x = 2.5;
      z = 0.5;
    }

    if (indexX === 14) {
      x = 2.6;
      z = 0.5;
    }

    if (indexX === 15) {
      x = 1.6;
      z = -0.5;
    }

    if (indexX === 16) {
      x = 0;
      z = -0.5;
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
  texture.minFilter = THREE.NearestFilter;
  texture.magFilter = THREE.NearestFilter;

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
  mesh.position.set(0, -2, 0);

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

export const getRoadCurve1 = () => {
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

  return curvePath;
};

export const getRoadCurve2 = () => {
  const curvePath = new THREE.CurvePath<THREE.Vector3>();
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
  //spline = getRoadCurve1();
  const object3D = new THREE.Object3D();
  object3D.add(building(new THREE.Vector3(4, 4, 32)));
  object3D.add(building(new THREE.Vector3(4, 4, -4)));
  object3D.add(building(new THREE.Vector3(28, 4, -4)).rotateY(Math.PI));
  object3D.add(building(new THREE.Vector3(28, 4, 32)).rotateY(Math.PI));
  object3D.add(overhead(new THREE.Vector3(16, 0, -32), screen4));
  object3D.add(overhead(new THREE.Vector3(32, 2, -72), screen2));
  object3D.add(overhead(new THREE.Vector3(0, 5, -48)), screenUrl);
  //object3D.add(overhead(new THREE.Vector3(-24, 8, 48), screen3));
  //object3D.add(overhead(new THREE.Vector3(32, 4, 72)).rotateY(0.2));
  //object3D.add(cylinder(new THREE.Vector3(8, 2, -88)));

  const defaultGeometry = roadSegmentDefault(4);
  const longGeometry = roadSegmentDefault(8);
  const cornerGeometry = roadSegmentCorner();
  const tunnelGeometry = roadSegmentTunnel();
  const groundTexture1 = new THREE.TextureLoader().load(track1Url);
  const groundTexture2 = new THREE.TextureLoader().load(track2Url);
  const groundTexture3 = new THREE.TextureLoader().load(track3Url);
  const groundTexture4 = new THREE.TextureLoader().load(track4Url);
  const groundTexture5 = new THREE.TextureLoader().load(track5Url);

  groundTexture1.minFilter = THREE.NearestFilter;
  groundTexture1.magFilter = THREE.NearestFilter;
  groundTexture2.minFilter = THREE.NearestFilter;
  groundTexture2.magFilter = THREE.NearestFilter;
  groundTexture3.minFilter = THREE.NearestFilter;
  groundTexture3.magFilter = THREE.NearestFilter;
  groundTexture4.minFilter = THREE.NearestFilter;
  groundTexture4.magFilter = THREE.NearestFilter;
  groundTexture5.minFilter = THREE.NearestFilter;
  groundTexture5.magFilter = THREE.NearestFilter;

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
  const material5 = new THREE.MeshBasicMaterial({
    color: 0xcccccc,
    map: groundTexture5,
  });
  material1.map.encoding = THREE.sRGBEncoding;
  material2.map.encoding = THREE.sRGBEncoding;
  material3.map.encoding = THREE.sRGBEncoding;
  material4.map.encoding = THREE.sRGBEncoding;
  material5.map.encoding = THREE.sRGBEncoding;

  const start = 74;
  const step = 4;
  const step2 = 8;
  const splineLength = spline.getLength();
  const stepCount = splineLength / step;
  const stepCountRounded = Math.ceil(stepCount);
  const stepCount2 = splineLength / step2;
  const stepCountRounded2 = Math.ceil(stepCount2);
  const increment = 1 / stepCount;
  const colors = getRoadColors();
  console.log("splineLength", splineLength);
  console.log("stepCount", stepCount);
  console.log("stepCountRounded", stepCountRounded);

  [
    new InstancedFlow(stepCountRounded, 1, defaultGeometry, material1),
    new InstancedFlow(stepCountRounded, 1, cornerGeometry, material2),
    new InstancedFlow(stepCountRounded, 1, longGeometry, material3),
    new InstancedFlow(stepCountRounded, 1, tunnelGeometry, material4),
    new InstancedFlow(stepCountRounded, 1, defaultGeometry, material5),
  ].forEach((flow, index) => {
    flow.updateCurve(0, spline);

    if (index === 0) {
      for (let i = 8; i < 9; i++) {
        flow.moveIndividualAlongCurve(i, ((start + i) * increment) % 1);
        flow.object3D.setColorAt(i, colors[i % colors.length]);
      }

      for (let i = 10; i < 32; i++) {
        flow.moveIndividualAlongCurve(i, ((start + i) * increment) % 1);
        flow.object3D.setColorAt(i, colors[i % colors.length]);
      }

      for (let i = 38; i < 52; i++) {
        flow.moveIndividualAlongCurve(i, ((start + i) * increment) % 1);
        flow.object3D.setColorAt(i, colors[i % colors.length]);
      }

      for (let i = 76; i < stepCountRounded; i++) {
        flow.moveIndividualAlongCurve(i, ((start + i) * increment) % 1);
        flow.object3D.setColorAt(i, colors[i % colors.length]);
      }
    }

    if (index === 1) {
      for (let i = 32; i < 38; i++) {
        flow.moveIndividualAlongCurve(i, ((start + i) * increment) % 1);
        flow.object3D.setColorAt(i, colors[i % colors.length]);
      }
    }

    if (index === 2) {
      for (let i = 0; i < 8; i++) {
        flow.moveIndividualAlongCurve(i, ((start + i) * increment) % 1);
        flow.object3D.setColorAt(i, colors[i % colors.length]);
      }
    }

    if (index === 3) {
      for (let i = 52; i < 76; i++) {
        flow.moveIndividualAlongCurve(i, ((start + i) * increment) % 1);
        flow.object3D.setColorAt(i, colors[i % colors.length]);
      }
    }

    if (index === 4) {
      for (let i = 9; i < 10; i++) {
        flow.moveIndividualAlongCurve(i, ((start + i) * increment) % 1);
        flow.object3D.setColorAt(i, colors[i % colors.length]);
      }
    }

    object3D.add(flow.object3D);
  });

  return object3D;
};
