import { formatTwoDigits } from "../utils/utils";

export class TimeElement {
  protected _container: HTMLDivElement;

  private _large: HTMLSpanElement;
  private _small: HTMLSpanElement;

  constructor() {
    this._container = document.createElement("div");
    this._container.className = "time-large";

    this._large = document.createElement("span");
    this._large.className = "time-seconds";

    this._small = document.createElement("span");
    this._small.className = "time-milliseconds";

    this._container.appendChild(this._large);
    this._container.appendChild(this._small);
  }

  public setValue(value: number) {
    const large = `${formatTwoDigits(Math.floor(value / 60))}:${formatTwoDigits(Math.floor(value % 60))}.`;
    const small = `${formatTwoDigits(Math.floor((value % 1) * 100))}`;

    this._large.innerText = large;
    this._small.innerText = small;
  }

  public get container() {
    return this._container;
  }
}
