import * as THREE from "three";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";

import ship from "../assets/images/ship.png";

export class Actor extends THREE.Group {
  private _cube: THREE.Mesh;
  private _cube1: THREE.Mesh;
  private _cube2: THREE.Mesh;
  private _mesh: THREE.Mesh;
  private _texture: THREE.Texture;

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
    this._cube2.lookAt(this._cube1.position);

    this._texture = new THREE.TextureLoader().load(ship);
    this._texture.minFilter = THREE.NearestFilter;
    this._texture.magFilter = THREE.NearestFilter;

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.castShadow = true;
    light.shadow.mapSize.width = 512; // default
    light.shadow.mapSize.height = 512; // default
    light.shadow.camera.near = 0.5; // default
    light.shadow.camera.far = 500; // default
    light.position.set(0, 4, 0);

    this.add(this._cube2);
    this.add(this._cube1);
    this.add(light);

    this.rotateY(Math.PI);
    this.loadModel();
  }

  private loadModel() {
    const loader = new OBJLoader();
    loader.load("./models/model.obj", (object: THREE.Object3D) => {
      object.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          this.setMesh(child);
        }
      });

      if (this._mesh) {
        this._mesh.scale.multiplyScalar(0.005);
        this._mesh.rotateY(Math.PI);
        this._mesh.position.setY(0.5);
        this._mesh.position.setZ(0.5);
        this._mesh.castShadow = true;

        this.add(this._mesh);
        this.loadMaterial();
      }
    });
  }

  private loadMaterial() {
    const loader = new THREE.MaterialLoader();
    loader.load("./models/material.json", (material: THREE.MeshBasicMaterial) => {
      material.map = this._texture;
      material.map.encoding = THREE.sRGBEncoding;
      material.side = THREE.DoubleSide;

      if (this._mesh) {
        this._mesh.material = material;
      }
    });
  }

  private setMesh(mesh: THREE.Mesh) {
    this._mesh = mesh;
  }

  public get cameraPosition() {
    return this._cube2;
  }

  public get model() {
    return this._mesh;
  }
}
