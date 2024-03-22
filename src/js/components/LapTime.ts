import { Time } from "./Time";

export class LapTime extends Time {
  private _span: HTMLSpanElement;
  private _index: number;

  constructor(index: number) {
    super();

    this._index = index;

    this._span = document.createElement("span");
    this._span.className = "time-index";

    this._container.style.top = `${2.8 + index * 2.4}rem`;
    this._container.prepend(this._span);
  }

  public setValue(value: number) {
    super.setValue(value);

    this._span.innerText = `${this._index + 1}.`;
  }
}
