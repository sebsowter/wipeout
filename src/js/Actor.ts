import * as THREE from "three";

export class Actor extends THREE.Group {
  private _cube: THREE.Mesh;
  private _cube1: THREE.Mesh;
  private _cube2: THREE.Mesh;

  constructor() {
    super();

    const geometry1 = new THREE.BoxGeometry(0.25, 0.25, 0.25);
    const geometry2 = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    const material1 = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const material2 = new THREE.MeshBasicMaterial({ color: 0x0000ff });

    this._cube = new THREE.Mesh(geometry1, material1);
    this._cube1 = new THREE.Mesh(geometry2, material2);
    this._cube2 = new THREE.Mesh(geometry2, material2);

    this._cube1.position.setZ(-1.5);
    this._cube1.position.setY(1);
    this._cube2.position.setZ(-0.7);
    this._cube2.position.setY(0.75);
  }

  public get cameraPosition() {
    return this._cube2.position;
  }
}
