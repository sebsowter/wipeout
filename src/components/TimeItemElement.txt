import { TimeElement } from "./TimeElement";

export class TimeItemElement extends TimeElement {
  private _index: HTMLSpanElement;
  private _indexN: number;

  constructor(value: number, index: number) {
    super(value);

    this._indexN = index;

    this._index = document.createElement("span");
    this._index.className = "time-index";

    this._container.style.top = `${2.8 + index * 2.4}rem`;
    this._container.prepend(this._index);
  }

  public setValue(value: number) {
    super.setValue(value);

    this._index.innerText = `${this._indexN + 1}.`;
  }
}
