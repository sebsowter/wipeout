import * as THREE from "three";

export function componentToHex(c: number) {
  const hex = c.toString(16);

  return hex.length == 1 ? "0" + hex : hex;
}

export function rgbToHex(r: number, g: number, b: number) {
  return "#" + componentToHex(Math.floor(r)) + componentToHex(Math.floor(g)) + componentToHex(Math.floor(b));
}

export function pointToPixel(x: number, y: number, width: number, height: number) {
  return new THREE.Vector2(Math.floor(width / 2 + x * 5), Math.floor(height / 2 + y * 5));
}

export function createHeightMap(curve: THREE.CurvePath<THREE.Vector3>, width: number, height: number) {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;

  document.body.appendChild(canvas);

  const context = canvas.getContext("2d");
  const points = curve.getSpacedPoints(1000);
  const max = 8.5;
  const min = 0;
  const colInc = 1 / max;

  //context.imageSmoothingEnabled = false;
  context.fillStyle = "#ff0000";
  context.fillRect(0, 0, width, height);

  points.forEach((point) => {
    const pixel = pointToPixel(point.x, point.z, width, height);
    const value = point.y * colInc * 255;

    context.fillStyle = rgbToHex(value, value, value);
    context.beginPath();
    context.arc(pixel.x, pixel.y, 12, 0, 2 * Math.PI);
    context.fill();
    context.closePath();
  });

  context.getImageData(0, 0, width, height);
}
