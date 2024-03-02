export class Keys {
  public isUpDown = false;
  public isDownDown = false;
  public isLeftDown = false;
  public isRightDown = false;

  constructor() {
    document.addEventListener("keydown", this.onKeyDown.bind(this), false);
    document.addEventListener("keyup", this.onKeyUp.bind(this), false);
  }

  private onKeyDown(event: KeyboardEvent) {
    const keyCode = event.which;

    if (keyCode == 87 || keyCode == 38) {
      this.isUpDown = true;
    } else if (keyCode == 83 || keyCode == 40) {
      this.isDownDown = true;
    } else if (keyCode == 65 || keyCode == 37) {
      this.isLeftDown = true;
    } else if (keyCode == 68 || keyCode == 39) {
      this.isRightDown = true;
    }
  }

  private onKeyUp(event: KeyboardEvent) {
    const keyCode = event.which;

    if (keyCode == 87 || keyCode == 38) {
      this.isUpDown = false;
    } else if (keyCode == 83 || keyCode == 40) {
      this.isDownDown = false;
    } else if (keyCode == 65 || keyCode == 37) {
      this.isLeftDown = false;
    } else if (keyCode == 68 || keyCode == 39) {
      this.isRightDown = false;
    }
  }
}
