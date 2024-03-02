import * as THREE from "three";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";

import ship from "../assets/images/ship.png";

export class Actor extends THREE.Group {
  private _cameraTarget: THREE.Object3D;
  private _cameraPosition: THREE.Object3D;
  private _mesh: THREE.Mesh;
  private _texture: THREE.Texture;

  constructor() {
    super();

    this._cameraTarget = new THREE.Object3D();
    this._cameraPosition = new THREE.Object3D();

    this._cameraTarget.position.setZ(-4);
    this._cameraTarget.position.setY(1);
    this._cameraPosition.position.setZ(-0.75);
    this._cameraPosition.position.setY(1);
    this._cameraPosition.lookAt(this._cameraTarget.position);

    this._texture = new THREE.TextureLoader().load(ship);
    this._texture.minFilter = THREE.NearestFilter;
    this._texture.magFilter = THREE.NearestFilter;

    //const light = new THREE.DirectionalLight(0xffffff, 1);
    //light.castShadow = true;
    //light.shadow.mapSize.width = 512; // default
    //light.shadow.mapSize.height = 512; // default
    //light.shadow.camera.near = 0.5; // default
    //light.shadow.camera.far = 500; // default
    //light.position.set(0, 4, 0);

    this.add(this._cameraPosition);
    this.add(this._cameraTarget);
    //this.add(light);

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
    return this._cameraPosition;
  }

  public get model() {
    return this._mesh;
  }
}
