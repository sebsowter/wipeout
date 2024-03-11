import * as THREE from "three";
import { InstancedFlow } from "three/examples/jsm/modifiers/CurveModifier.js";

import { mkSimplexNoise } from "./simplex";
import { getRoadColors } from "./utils";

export const getMap = (texture: THREE.Texture) => {
  const canvas = document.createElement("canvas");
  canvas.width = texture.image.width;
  canvas.height = texture.image.height;

  const context = canvas.getContext("2d");
  context.drawImage(texture.image, 0, 0);

  return context.getImageData(0, 0, canvas.width, canvas.height);
};

export const building = (position: THREE.Vector3, texture: THREE.Texture) => {
  const object = new THREE.Object3D();
  object.position.copy(position);

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
  //material.map.colorSpace = THREE.SRGBColorSpace;

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
  geometry.computeBoundingSphere();

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

export const pillar = (position: THREE.Vector3, texture?: THREE.Texture) => {
  const material = new THREE.MeshBasicMaterial({
    transparent: true,
    map: texture,
  });

  const geometry = new THREE.BoxGeometry(1, 12, 1);

  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.copy(position);

  return mesh;
};

export const cylinder = (position: THREE.Vector3, texture: THREE.Texture) => {
  const material = new THREE.MeshBasicMaterial({
    color: 0xcccccc,
    map: texture,
  });

  const geometry = new THREE.SphereGeometry(4, 16, 8);

  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.copy(position);

  return mesh;
};

export const overhead = (position: THREE.Vector3, texture: THREE.Texture, pTexture: THREE.Texture) => {
  const object3d = new THREE.Object3D();

  const material = new THREE.MeshBasicMaterial({
    color: 0xcccccc,
    map: texture,
    side: THREE.DoubleSide,
  });
  material.map.colorSpace = THREE.SRGBColorSpace;

  const geometry = new THREE.PlaneGeometry(10, 4, 1, 1);

  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(position.x, position.y + 4, position.z);

  object3d.add(pillar(new THREE.Vector3(position.x + 5.5, position.y, position.z), pTexture));
  object3d.add(pillar(new THREE.Vector3(position.x - 5.5, position.y, position.z), pTexture));
  object3d.add(pillar(new THREE.Vector3(position.x, position.y + 6.5, position.z), pTexture).rotateZ(Math.PI / 2));
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
      x = 1.7;
      z = -0.5;
    }

    if (indexX === 1) {
      x = -1.7;
      z = -0.5;
    }

    if (indexX === 2) {
      x = -2.7;
      z = 0.6;
    }

    if (indexX === 3) {
      x = -2.6;
      z = 0.6;
    }

    if (indexX === 13) {
      x = 2.6;
      z = 0.6;
    }

    if (indexX === 14) {
      x = 2;
      z = 2;
    }

    if (indexX === 15) {
      x = 2.7;
      z = 0.5;
    }

    if (indexX === 16) {
      x = 1.7;
      z = -0.5;
    }

    positionAttribute.setXYZ(i, x, vertex.y, z);
  }

  geometry.rotateX(Math.PI / 2).rotateY(Math.PI / 2);
  geometry.attributes.position.needsUpdate = true;
  geometry.computeVertexNormals();
  geometry.computeBoundingSphere();

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
      x = -2.6;
      z = 0.6;
    }

    if (indexX === 13) {
      x = 2.6;
      z = 0.6;
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
  geometry.computeBoundingSphere();

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
      x = -1.7;
      z = -0.5;
    }

    if (indexX === 2) {
      x = -2.7;
      z = 0.6;
    }

    if (indexX === 3) {
      x = -2.6;
      z = 0.6;
    }

    if (indexX === 13) {
      x = 2.6;
      z = 0.6;
    }

    if (indexX === 14) {
      x = 2.7;
      z = 0.6;
    }

    if (indexX === 15) {
      x = 1.7;
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
  geometry.computeBoundingSphere();

  return geometry;
};

export const getTerrain = (imageData: ImageData, texture: THREE.Texture) => {
  const material = new THREE.MeshBasicMaterial({
    color: 0x999999,
    map: texture,
  });
  material.map.colorSpace = THREE.SRGBColorSpace;

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
  geometry.computeBoundingSphere();

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

export const road = (spline: THREE.CurvePath<THREE.Vector3>, textures: { [key: string]: THREE.Texture }) => {
  //spline = getRoadCurve1();
  const object3D = new THREE.Object3D();
  object3D.add(building(new THREE.Vector3(4, 4, 32), textures.stand));
  object3D.add(building(new THREE.Vector3(4, 4, -4), textures.stand));
  object3D.add(building(new THREE.Vector3(28, 4, -4), textures.stand).rotateY(Math.PI));
  object3D.add(building(new THREE.Vector3(28, 4, 32), textures.stand).rotateY(Math.PI));
  object3D.add(overhead(new THREE.Vector3(16, 0, -32), textures.screen4, textures.pillar));
  object3D.add(overhead(new THREE.Vector3(32, 2, -72), textures.screen2, textures.pillar));
  object3D.add(overhead(new THREE.Vector3(0, 5, -48), textures.screen1, textures.pillar));
  //object3D.add(overhead(new THREE.Vector3(-24, 8, 48), screen3));
  //object3D.add(overhead(new THREE.Vector3(32, 4, 72)).rotateY(0.2));
  //object3D.add(cylinder(new THREE.Vector3(8, 2, -88)));

  const defaultGeometry = roadSegmentDefault(4);
  const longGeometry = roadSegmentDefault(8);
  const cornerGeometry = roadSegmentCorner();
  const tunnelGeometry = roadSegmentTunnel();

  const material1 = new THREE.MeshBasicMaterial({
    color: 0x99bbcc,
    map: textures.ground1,
  });
  const material2 = new THREE.MeshBasicMaterial({
    color: 0xcccccc,
    map: textures.ground2,
  });
  const material3 = new THREE.MeshBasicMaterial({
    color: 0xcccccc,
    map: textures.ground3,
  });
  const material4 = new THREE.MeshBasicMaterial({
    color: 0xcccccc,
    map: textures.ground4,
  });
  const material5 = new THREE.MeshBasicMaterial({
    color: 0xcccccc,
    map: textures.ground5,
  });
  const material6 = new THREE.MeshBasicMaterial({
    color: 0x00ffff,
    transparent: true,
    map: textures.ground6,
  });
  material1.map.colorSpace = THREE.SRGBColorSpace;
  material2.map.colorSpace = THREE.SRGBColorSpace;
  material3.map.colorSpace = THREE.SRGBColorSpace;
  material4.map.colorSpace = THREE.SRGBColorSpace;
  material5.map.colorSpace = THREE.SRGBColorSpace;
  material6.map.colorSpace = THREE.SRGBColorSpace;

  const start = 74;
  const step = 4;
  const splineLength = spline.getLength();
  const stepCount = splineLength / step;
  const stepCountRounded = Math.ceil(stepCount);
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
    new InstancedFlow(stepCountRounded, 1, defaultGeometry, material6),
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

    if (index === 5) {
      for (let i = 52; i < 53; i++) {
        flow.moveIndividualAlongCurve(i, ((start + i) * increment) % 1);
        //flow.object3D.setColorAt(i, new THREE.Color(0x00ffff));
      }

      for (let i = 66; i < 67; i++) {
        flow.moveIndividualAlongCurve(i, ((start + i) * increment) % 1);
        //flow.object3D.setColorAt(i, new THREE.Color(0x00ffff));
      }
    }

    object3D.add(flow.object3D);
  });

  return object3D;
};
