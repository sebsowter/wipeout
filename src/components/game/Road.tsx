import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { InstancedFlow } from "three/examples/jsm/modifiers/CurveModifier.js";

import { getImageDataFromTexture, getRoadColors } from "../../utils/utils";
import { mkSimplexNoise } from "../../utils/simplex";
import { useRef } from "react";

export interface RoadProps {
  curve: THREE.CurvePath<THREE.Vector3>;
}

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

export function Road({ curve }: RoadProps) {
  const defaultGeometry = roadSegmentDefault(4);
  const longGeometry = roadSegmentDefault(8);
  const cornerGeometry = roadSegmentCorner();
  const tunnelGeometry = roadSegmentTunnel();

  const material1 = new THREE.MeshBasicMaterial({
    color: 0x99bbcc,
    // map: textures.ground1,
  });
  const material2 = new THREE.MeshBasicMaterial({
    color: 0xcccccc,
    //  map: textures.ground2,
  });
  const material3 = new THREE.MeshBasicMaterial({
    color: 0xcccccc,
    // map: textures.ground3,
  });
  const material4 = new THREE.MeshBasicMaterial({
    color: 0xcccccc,
    // map: textures.ground4,
  });
  const material5 = new THREE.MeshBasicMaterial({
    color: 0xcccccc,
    // map: textures.ground5,
  });
  const material6 = new THREE.MeshBasicMaterial({
    color: 0x00ffff,
    transparent: true,
    //  map: textures.ground6,
  });
  /*
  material1.map.colorSpace = THREE.SRGBColorSpace;
  material2.map.colorSpace = THREE.SRGBColorSpace;
  material3.map.colorSpace = THREE.SRGBColorSpace;
  material4.map.colorSpace = THREE.SRGBColorSpace;
  material5.map.colorSpace = THREE.SRGBColorSpace;
  material6.map.colorSpace = THREE.SRGBColorSpace;
  */

  const start = 74;
  const step = 4;
  const splineLength = curve.getLength();
  const stepCount = splineLength / step;
  const stepCountRounded = Math.ceil(stepCount);
  const increment = 1 / stepCount;
  const colors = getRoadColors();
  console.log("splineLength", splineLength);
  console.log("stepCount", stepCount);
  console.log("stepCountRounded", stepCountRounded);

  const sccc = (element: any) => {
    const flows = [new InstancedFlow(stepCountRounded, 1, defaultGeometry, material1), new InstancedFlow(stepCountRounded, 1, cornerGeometry, material2), new InstancedFlow(stepCountRounded, 1, longGeometry, material3), new InstancedFlow(stepCountRounded, 1, tunnelGeometry, material4), new InstancedFlow(stepCountRounded, 1, defaultGeometry, material5), new InstancedFlow(stepCountRounded, 1, defaultGeometry, material6)].map((flow, index) => {
      flow.updateCurve(0, curve);

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

      element.add(flow.object3D);

      return flow.object3D;
    });

    return;
  };

  return <group ref={sccc}></group>;
}
