import * as THREE from "three";

export class Actor extends THREE.Group {
  private _cameraTarget: THREE.Object3D;
  private _cameraPosition: THREE.Object3D;
  private _main: THREE.Object3D;
  private _mesh: THREE.Mesh;
  private _shadow: THREE.Mesh;
  private _flames: THREE.Mesh;

  constructor(
    model: THREE.Object3D,
    material2: THREE.MeshBasicMaterial,
    ship: THREE.Texture,
    shadow: THREE.Texture,
    flames: THREE.Texture
  ) {
    super();

    this._cameraTarget = new THREE.Object3D();
    this._cameraPosition = new THREE.Object3D();
    this._main = new THREE.Object3D();
    this._main.rotateY(Math.PI);
    this._main.position.setY(0.4);
    this._main.position.setZ(0);

    const shadowMaterial = new THREE.MeshBasicMaterial({
      transparent: true,
      map: shadow,
      side: THREE.DoubleSide,
      opacity: 0.4,
    });
    shadowMaterial.depthTest = false;

    const material3 = new THREE.MeshBasicMaterial({
      transparent: true,
      color: 0xff0000,
      side: THREE.DoubleSide,
    });
    material3.depthTest = false;

    const material4 = new THREE.MeshBasicMaterial({
      transparent: true,
      map: flames,
      side: THREE.DoubleSide,
    });
    material4.depthTest = false;

    const plane = new THREE.PlaneGeometry(0.75, 0.375);

    const cylinder = new THREE.CylinderGeometry(0.05, 0.05, 0.2, 6, 1, true);

    this._flames = new THREE.Mesh(cylinder, material4);
    this._flames.position.set(0, -0.075, 0.1);
    this._flames.rotation.set(Math.PI / 2, Math.PI / 2, 0);
    this._flames.scale.set(0.5, 1, 1);
    this._flames.renderOrder = 999;

    this._shadow = new THREE.Mesh(plane, shadowMaterial);
    this._shadow.position.set(0, 0, 0);
    this._shadow.renderOrder = 998;

    this._cameraTarget.position.setZ(-4);
    this._cameraTarget.position.setY(0.5);
    this._cameraPosition.position.setZ(-0.75);
    this._cameraPosition.position.setY(0.6);
    this._cameraPosition.lookAt(this._cameraTarget.position);

    this.add(this._shadow);
    this.add(this._cameraPosition);
    this.add(this._cameraTarget);
    this.add(this._main);

    this.rotateY(Math.PI);

    model.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        this.setMesh(child);
      }
    });

    this._mesh.scale.multiplyScalar(0.06);
    this._mesh.renderOrder = 999;
    this._mesh.material = material2;

    this.material.map = ship;
    this.material.map.colorSpace = THREE.SRGBColorSpace;

    this._main.add(this._mesh);
    //this._main.add(this._flames);
  }

  private setMesh(mesh: THREE.Mesh) {
    this._mesh = mesh;
  }

  public get cameraPosition() {
    return this._cameraPosition;
  }

  public get material() {
    return this._mesh.material as THREE.MeshBasicMaterial;
  }

  public get shadow() {
    return this._shadow;
  }

  public get model() {
    return this._main;
  }
}
