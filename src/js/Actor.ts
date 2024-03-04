import * as THREE from "three";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";

import ship from "../assets/images/ship.png";
import shadow from "../assets/images/shadow.png";

export class Actor extends THREE.Group {
  private _cameraTarget: THREE.Object3D;
  private _cameraPosition: THREE.Object3D;
  private _mesh: THREE.Mesh;
  private _shadow: THREE.Mesh;
  private _texture: THREE.Texture;

  constructor() {
    super();

    this._cameraTarget = new THREE.Object3D();
    this._cameraPosition = new THREE.Object3D();

    const texture = new THREE.TextureLoader().load(shadow);
    texture.minFilter = THREE.NearestFilter;
    texture.magFilter = THREE.NearestFilter;

    const material = new THREE.MeshBasicMaterial({
      transparent: true,
      map: texture,
      side: THREE.DoubleSide,
      opacity: 0.5,
    });
    material.depthTest = false;
    //material.depthWrite = false;

    const plane = new THREE.PlaneGeometry(1, 0.5);

    this._shadow = new THREE.Mesh(plane, material);
    this._shadow.position.set(0, 0, 0.5);
    this._shadow.renderOrder = 998;

    this._cameraTarget.position.setZ(-4);
    this._cameraTarget.position.setY(1);
    this._cameraPosition.position.setZ(-0.75);
    this._cameraPosition.position.setY(1);
    this._cameraPosition.lookAt(this._cameraTarget.position);

    this._texture = new THREE.TextureLoader().load(ship);
    this._texture.minFilter = THREE.NearestFilter;
    this._texture.magFilter = THREE.NearestFilter;

    this.add(this._shadow);
    this.add(this._cameraPosition);
    this.add(this._cameraTarget);

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
        this._mesh.scale.multiplyScalar(0.05);
        this._mesh.rotateY(Math.PI);
        this._mesh.position.setY(0.65);
        this._mesh.position.setZ(0.5);
        this._mesh.renderOrder = 999;

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

  public get shadow() {
    return this._shadow;
  }

  public get model() {
    return this._mesh;
  }
}
