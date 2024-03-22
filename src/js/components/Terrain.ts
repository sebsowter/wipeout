import * as THREE from "three";

import { getTerrain } from "../constants/meshes";

export class Terrain extends THREE.Group {
  constructor(texture: THREE.Texture, texture2: THREE.Texture) {
    super();

    const canvas = document.createElement("canvas");
    canvas.width = texture.image.width;
    canvas.height = texture.image.height;

    const context = canvas.getContext("2d");
    context.drawImage(texture.image, 0, 0);

    const terrain = getTerrain(context.getImageData(0, 0, canvas.width, canvas.height), texture2);

    this.add(terrain);
  }
}
