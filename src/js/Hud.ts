import * as THREE from "three";

import terrain from "../assets/images/terrain.png";
import { getTerrain } from "./meshes";

export class Terrain extends THREE.Group {
  constructor() {
    super();

    new THREE.TextureLoader().load(terrain, (texture) => {
      const canvas = document.createElement("canvas");
      canvas.width = texture.image.width;
      canvas.height = texture.image.height;

      const context = canvas.getContext("2d");
      context.drawImage(texture.image, 0, 0);

      const terrain = getTerrain(context.getImageData(0, 0, canvas.width, canvas.height));

      this.add(terrain);
    });
  }
}
