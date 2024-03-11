import * as THREE from "three";

export class Actor extends THREE.Group {
  private _cameraTarget: THREE.Object3D;
  private _cameraPosition: THREE.Object3D;
  private _mesh: THREE.Mesh;
  private _shadow: THREE.Mesh;

  constructor(model: THREE.Object3D, material2: THREE.MeshBasicMaterial, ship: THREE.Texture, shadow: THREE.Texture) {
    super();

    this._cameraTarget = new THREE.Object3D();
    this._cameraPosition = new THREE.Object3D();

    const material = new THREE.MeshBasicMaterial({
      transparent: true,
      map: shadow,
      side: THREE.DoubleSide,
      opacity: 0.4,
    });
    material.depthTest = false;

    const plane = new THREE.PlaneGeometry(0.75, 0.375);

    this._shadow = new THREE.Mesh(plane, material);
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

    this.rotateY(Math.PI);

    model.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        this.setMesh(child);
      }
    });

    this._mesh.scale.multiplyScalar(0.06);
    this._mesh.rotateY(Math.PI);
    this._mesh.position.setY(0.4);
    this._mesh.position.setZ(0);
    this._mesh.renderOrder = 999;
    this._mesh.material = material2;

    this.material.map = ship;
    this.material.map.colorSpace = THREE.SRGBColorSpace;

    this.add(this._mesh);
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
    return this._mesh;
  }
}
