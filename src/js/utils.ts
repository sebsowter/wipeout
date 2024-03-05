import * as THREE from "three";

export function getHeight(heightData: ImageData, position: THREE.Vector3, min = 0, max = 8.5) {
  const pixel = getPixel(heightData, new THREE.Vector2(position.x, position.z), 16);

  if (pixel) {
    const [r, _, b] = pixel;

    if (r === 255 && b === 255) {
      return min;
    }

    return (b / 255) * (max - min);
  }

  return min;
}

export function getCollision(
  heightData: ImageData,
  position: THREE.Vector3,
  rotationY: THREE.Vector3,
): [number, number] {
  const pixel = getPixel(heightData, new THREE.Vector2(position.x, position.z), 8);
  const direction = new THREE.Vector2(rotationY.x, rotationY.z);
  const angle = direction.angle();

  if (pixel) {
    const [r] = pixel;

    if (r === 255) {
      const hitLeft = new THREE.Vector2(4, 0).rotateAround(new THREE.Vector2(0, 0), angle - Math.PI / 2);
      const hitRight = new THREE.Vector2(4, 0).rotateAround(new THREE.Vector2(0, 0), angle + Math.PI / 2);

      const [left] = getPixel(
        heightData,
        new THREE.Vector2(hitLeft.x, hitLeft.y).add(new THREE.Vector2(position.x, position.z)),
        8,
      );
      const [right] = getPixel(
        heightData,
        new THREE.Vector2(hitRight.x, hitRight.y).add(new THREE.Vector2(position.x, position.z)),
        8,
      );

      return [left / 255, right / 255];
    }
  }

  return undefined;
}

export function getPixel(heightData: ImageData, position: THREE.Vector2, scale: number) {
  const pixel = pointToPixel(position.x, position.y, heightData.width, heightData.height, scale);
  const start = Math.floor(pixel.y * heightData.width + pixel.x) * 4;

  if (heightData) {
    const r = heightData.data[start];
    const g = heightData.data[start + 1];
    const b = heightData.data[start + 2];

    return [r, g, b];
  }

  return undefined;
}

export function componentToHex(c: number) {
  const hex = c.toString(16);

  return hex.length == 1 ? "0" + hex : hex;
}

export function formatTwoDigits(value: number) {
  return value.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
}

export function getTimeString(time: number) {
  return `${formatTwoDigits(Math.floor(time / 60))}:${formatTwoDigits(Math.floor(time % 60))}.${formatTwoDigits(Math.floor((time % 1) * 100))}`;
}

export function rgbToHex(r: number, g: number, b: number) {
  return "#" + componentToHex(Math.floor(r)) + componentToHex(Math.floor(g)) + componentToHex(Math.floor(b));
}

export function pointToPixel(x: number, y: number, width: number, height: number, scale: number) {
  return new THREE.Vector2(Math.floor(width / 2 + x * scale), Math.floor(height / 2 + y * scale));
}

export function createHeightMap(curve: THREE.CurvePath<THREE.Vector3>) {
  const width = 2048;
  const height = 4096;

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

  points.reverse().forEach((point) => {
    const pixel = pointToPixel(point.x, point.z, width, height, 16);
    const value = point.y * colInc * 255;

    context.fillStyle = rgbToHex(value, value, value);
    context.beginPath();
    context.arc(pixel.x, pixel.y, 64, 0, 2 * Math.PI);
    context.fill();
    context.closePath();
  });

  context.getImageData(0, 0, width, height);
}

export function createCollisionMap(curve: THREE.CurvePath<THREE.Vector3>) {
  const width = 1024;
  const height = 2048;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;

  document.body.appendChild(canvas);

  const context = canvas.getContext("2d");
  const points = curve.getSpacedPoints(1000);

  //context.imageSmoothingEnabled = false;
  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, width, height);
  context.fillStyle = "#000000";

  points.forEach((point) => {
    const pixel = pointToPixel(point.x, point.z, width, height, 8);

    context.beginPath();

    context.arc(pixel.x, pixel.y, 16, 0, 2 * Math.PI);
    context.fill();
    context.closePath();
  });

  context.getImageData(0, 0, width, height);
}

export function getRoadColors() {
  const keyColors: [number, THREE.Color][] = [
    [2, new THREE.Color(0xffffff)],
    [3, new THREE.Color(0xcccccc)],
    [3, new THREE.Color(0xffcc66)], // sign 1
    [2, new THREE.Color(0x99bbcc)],
    [3, new THREE.Color(0xffcc66)], // sign 1
    [3, new THREE.Color(0xffffff)], // curve
    [3, new THREE.Color(0x99bbcc)],
    [3, new THREE.Color(0xcccccc)],
    [4, new THREE.Color(0xffee33)], // tunnel
    [8, new THREE.Color(0xff9933)], // tunnel
    [4, new THREE.Color(0xffee33)], // tunnel
    [3, new THREE.Color(0xffffff)],
    [3, new THREE.Color(0x99bbcc)],
    [3, new THREE.Color(0xffffff)],
    [3, new THREE.Color(0xcccccc)],
    [3, new THREE.Color(0x99bbcc)],
    [3, new THREE.Color(0xffffff)],
    [10, new THREE.Color(0xffffff)],
  ];

  const colors = keyColors.reduce(
    (previous, [total, nextColor]) => {
      const increment = 1 / (total + 1);
      const lastColor = previous[previous.length - 1];
      const current = Array.from(Array(total)).map((_, index) => {
        return lastColor.clone().lerp(nextColor, (index + 1) * increment);
      });

      return [...previous, ...current];
    },
    [new THREE.Color(0xcccccc)],
  );

  return colors;
}