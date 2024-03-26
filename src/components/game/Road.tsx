import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { InstancedFlow } from "three/examples/jsm/modifiers/CurveModifier.js";

import { getRoadColors } from "../../utils/utils";

export function roadSegmentCorner() {
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
  //geometry.computeBoundingSphere();

  return geometry;
}

export function roadSegmentTunnel() {
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
  //geometry.computeBoundingSphere();

  return geometry;
}

export function roadSegmentDefault(length = 8) {
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
  //geometry.computeBoundingSphere();

  return geometry;
}

export interface RoadProps {
  curve: THREE.CurvePath<THREE.Vector3>;
}

export function Road({ curve }: RoadProps) {
  const ground1 = useLoader(THREE.TextureLoader, "./images/track1.png");
  const ground2 = useLoader(THREE.TextureLoader, "./images/track2.png");
  const ground3 = useLoader(THREE.TextureLoader, "./images/track3.png");
  const ground4 = useLoader(THREE.TextureLoader, "./images/track4.png");
  const ground5 = useLoader(THREE.TextureLoader, "./images/track5.png");
  const ground6 = useLoader(THREE.TextureLoader, "./images/track6.png");

  const defaultGeometry = roadSegmentDefault(4);
  const longGeometry = roadSegmentDefault(8);
  const cornerGeometry = roadSegmentCorner();
  const tunnelGeometry = roadSegmentTunnel();

  ground1.colorSpace = THREE.SRGBColorSpace;
  ground2.colorSpace = THREE.SRGBColorSpace;
  ground3.colorSpace = THREE.SRGBColorSpace;
  ground4.colorSpace = THREE.SRGBColorSpace;
  ground5.colorSpace = THREE.SRGBColorSpace;
  ground6.colorSpace = THREE.SRGBColorSpace;

  ground1.minFilter = THREE.NearestFilter;
  ground1.magFilter = THREE.NearestFilter;
  ground2.minFilter = THREE.NearestFilter;
  ground2.magFilter = THREE.NearestFilter;
  ground3.minFilter = THREE.NearestFilter;
  ground3.magFilter = THREE.NearestFilter;
  ground4.minFilter = THREE.NearestFilter;
  ground4.magFilter = THREE.NearestFilter;
  ground5.minFilter = THREE.NearestFilter;
  ground5.magFilter = THREE.NearestFilter;
  ground6.minFilter = THREE.NearestFilter;
  ground6.magFilter = THREE.NearestFilter;

  const material1 = new THREE.MeshBasicMaterial({
    color: 0x99bbcc,
    map: ground1,
  });
  const material2 = new THREE.MeshBasicMaterial({
    color: 0xcccccc,
    map: ground2,
  });
  const material3 = new THREE.MeshBasicMaterial({
    color: 0xcccccc,
    map: ground3,
  });
  const material4 = new THREE.MeshBasicMaterial({
    color: 0xcccccc,
    map: ground4,
  });
  const material5 = new THREE.MeshBasicMaterial({
    color: 0xcccccc,
    map: ground5,
  });
  const material6 = new THREE.MeshBasicMaterial({
    color: 0x00ffff,
    transparent: true,
    map: ground6,
  });

  const start = 74;
  const step = 4;
  const splineLength = curve.getLength();
  const stepCount = splineLength / step;
  const stepCountRounded = Math.ceil(stepCount);
  const increment = 1 / stepCount;
  const colors = getRoadColors();

  const ref = (element: THREE.Group) => {
    const flows = [
      new InstancedFlow(stepCountRounded, 1, defaultGeometry, material1),
      new InstancedFlow(stepCountRounded, 1, cornerGeometry, material2),
      new InstancedFlow(stepCountRounded, 1, longGeometry, material3),
      new InstancedFlow(stepCountRounded, 1, tunnelGeometry, material4),
      new InstancedFlow(stepCountRounded, 1, defaultGeometry, material5),
      new InstancedFlow(stepCountRounded, 1, defaultGeometry, material6),
    ];

    flows.map((flow, index) => {
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

  return <group ref={ref} />;
}
