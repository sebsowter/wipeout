import * as THREE from "three";

export class Lights extends THREE.Group {
  private _material: THREE.MeshBasicMaterial;
  private _textureIndex: number = 0;
  private _textures: THREE.Texture[];

  constructor(position: THREE.Vector3, textures: THREE.Texture[]) {
    super();

    this.position.copy(position);

    this._textures = textures;

    this._material = new THREE.MeshBasicMaterial({
      color: 0xcccccc,
      map: this.texture,
      side: THREE.DoubleSide,
    });
    this._material.map.colorSpace = THREE.SRGBColorSpace;

    const geometry0 = new THREE.PlaneGeometry(1.5, 0.5);
    const mesh0 = new THREE.Mesh(geometry0, this._material);
    mesh0.position.set(0, 2, 0);

    const material = new THREE.MeshBasicMaterial({ color: 0x666666 });
    const geometry1 = new THREE.BoxGeometry(3.1, 0.1, 0.1);
    const mesh1 = new THREE.Mesh(geometry1, material);
    mesh1.position.set(1.5, 2.3, 0);

    const geometry2 = new THREE.BoxGeometry(0.1, 2.25, 0.1);
    const mesh2 = new THREE.Mesh(geometry2, material);
    mesh2.position.set(3, 1.125, 0);

    this.add(mesh1);
    this.add(mesh2);
    this.add(mesh0);
  }

  public setState(value: number) {
    this._textureIndex = value;
    this._material.map = this.texture;
    this._material.map.needsUpdate = true;
  }

  private get texture() {
    return this._textures[this._textureIndex];
  }
}
