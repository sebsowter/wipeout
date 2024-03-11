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
    const keyCode = event.key;

    if (keyCode == "w" || keyCode == "ArrowUp") {
      this.isUpDown = true;
    } else if (keyCode == "s" || keyCode == "ArrowDown") {
      this.isDownDown = true;
    } else if (keyCode == "a" || keyCode == "ArrowLeft") {
      this.isLeftDown = true;
    } else if (keyCode == "d" || keyCode == "ArrowRight") {
      this.isRightDown = true;
    }
  }

  private onKeyUp(event: KeyboardEvent) {
    const keyCode = event.key;

    if (keyCode == "w" || keyCode == "ArrowUp") {
      this.isUpDown = false;
    } else if (keyCode == "s" || keyCode == "ArrowDown") {
      this.isDownDown = false;
    } else if (keyCode == "a" || keyCode == "ArrowLeft") {
      this.isLeftDown = false;
    } else if (keyCode == "d" || keyCode == "ArrowRight") {
      this.isRightDown = false;
    }
  }
}
