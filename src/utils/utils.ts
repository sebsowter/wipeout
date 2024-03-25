import * as THREE from "three";

export function getImageDataFromTexture(texture: THREE.Texture) {
  const canvas = document.createElement("canvas");
  canvas.width = texture.image.width;
  canvas.height = texture.image.height;

  const context = canvas.getContext("2d");

  if (context) {
    context.drawImage(texture.image, 0, 0);

    return context.getImageData(0, 0, canvas.width, canvas.height);
  }

  return;
}

export function getRoadCurve() {
  const curvePath = new THREE.CurvePath<THREE.Vector3>();
  curvePath.add(new THREE.LineCurve3(new THREE.Vector3(16, 0, 0), new THREE.Vector3(16, 0, -32)));
  curvePath.add(new THREE.CubicBezierCurve3(new THREE.Vector3(16, 0, -32), new THREE.Vector3(16, 0, -48), new THREE.Vector3(32, 0, -40), new THREE.Vector3(32, 0, -56)));
  curvePath.add(new THREE.CubicBezierCurve3(new THREE.Vector3(32, 0, -56), new THREE.Vector3(32, 0, -72), new THREE.Vector3(32, 2, -72), new THREE.Vector3(32, 2, -88)));
  curvePath.add(new THREE.CubicBezierCurve3(new THREE.Vector3(32, 2, -88), new THREE.Vector3(32, 2, -100), new THREE.Vector3(16, 2, -100), new THREE.Vector3(16, 2, -88)));
  curvePath.add(new THREE.CatmullRomCurve3([new THREE.Vector3(16, 2, -88), new THREE.Vector3(16, 2, -80), new THREE.Vector3(0, 3, -64), new THREE.Vector3(0, 5, -48), new THREE.Vector3(-32, 4, -16), new THREE.Vector3(-24, 6, 16), new THREE.Vector3(-24, 8, 48), new THREE.Vector3(-24, 8, 56)], false));
  curvePath.add(new THREE.CubicBezierCurve3(new THREE.Vector3(-24, 8, 56), new THREE.Vector3(-24, 8, 64), new THREE.Vector3(-16, 7, 72), new THREE.Vector3(-8, 7, 72)));
  curvePath.add(new THREE.CubicBezierCurve3(new THREE.Vector3(-8, 7, 72), new THREE.Vector3(8, 7, 72), new THREE.Vector3(8, 8, 96), new THREE.Vector3(24, 8, 96)));
  curvePath.add(new THREE.LineCurve3(new THREE.Vector3(24, 8, 96), new THREE.Vector3(32, 8, 96)));
  curvePath.add(new THREE.CubicBezierCurve3(new THREE.Vector3(32, 8, 96), new THREE.Vector3(48, 8, 96), new THREE.Vector3(48, 4, 72), new THREE.Vector3(32, 4, 72)));
  curvePath.add(new THREE.CubicBezierCurve3(new THREE.Vector3(32, 4, 72), new THREE.Vector3(8, 4, 72), new THREE.Vector3(16, 0, 48), new THREE.Vector3(16, 0, 32)));
  curvePath.add(new THREE.LineCurve3(new THREE.Vector3(16, 0, 32), new THREE.Vector3(16, 0, 0)));

  return curvePath;
}

export function getHeight(imageData: ImageData | undefined, position: THREE.Vector3, min = 0, max = 8.5) {
  if (imageData) {
    const pixel = getPixel(imageData, new THREE.Vector2(position.x, position.z), 16);

    if (pixel) {
      const [r, _, b] = pixel;

      if (r === 255 && b === 255) {
        return min;
      }

      return (b / 255) * (max - min);
    }

    return min;
  }

  return 0;
}

export function getCollision(imageData: ImageData | undefined, position: THREE.Vector3, direction: THREE.Vector2): [number, number] | undefined {
  if (imageData) {
    const pixel = getPixel(imageData, new THREE.Vector2(position.x, position.z), 8);
    const angle = direction.angle();

    const [r, g] = pixel;

    if (r === 255 && g === 255) {
      const hitLeft = new THREE.Vector2(4, 0).rotateAround(new THREE.Vector2(0, 0), angle - Math.PI / 2);
      const hitRight = new THREE.Vector2(4, 0).rotateAround(new THREE.Vector2(0, 0), angle + Math.PI / 2);

      const [left] = getPixel(imageData, new THREE.Vector2(hitLeft.x, hitLeft.y).add(new THREE.Vector2(position.x, position.z)), 8);
      const [right] = getPixel(imageData, new THREE.Vector2(hitRight.x, hitRight.y).add(new THREE.Vector2(position.x, position.z)), 8);

      return [left / 255, right / 255];
    }
  }

  return;
}

export function getPixel(imageData: ImageData, position: THREE.Vector2, scale: number) {
  const pixel = pointToPixel(position.x, position.y, imageData.width, imageData.height, scale);
  const start = Math.floor(pixel.y * imageData.width + pixel.x) * 4;

  const r = imageData.data[start];
  const g = imageData.data[start + 1];
  const b = imageData.data[start + 2];

  return [r, g, b];
}

export function pointToPixel(x: number, y: number, width: number, height: number, scale: number) {
  return new THREE.Vector2(Math.floor(width / 2 + x * scale), Math.floor(height / 2 + y * scale));
}

export function formatTwoDigits(value: number) {
  return value.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
}

/*
export function componentToHex(c: number) {
  const hex = c.toString(16);

  return hex.length == 1 ? "0" + hex : hex;
}

export function getTimeString(time: number) {
  return `${formatTwoDigits(Math.floor(time / 60))}:${formatTwoDigits(Math.floor(time % 60))}.${formatTwoDigits(
    Math.floor((time % 1) * 100)
  )}`;
}

export function getTimeElement(time: number) {
  return `${formatTwoDigits(Math.floor(time / 60))}:${formatTwoDigits(Math.floor(time % 60))}.${formatTwoDigits(
    Math.floor((time % 1) * 100)
  )}`;
}

export function rgbToHex(r: number, g: number, b: number) {
  return "#" + componentToHex(Math.floor(r)) + componentToHex(Math.floor(g)) + componentToHex(Math.floor(b));
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
*/

export function getRoadColors() {
  const keyColors: [number, THREE.Color][] = [
    [4, new THREE.Color(0xffffff)],
    [6, new THREE.Color(0xcccccc)],
    [6, new THREE.Color(0xffcc66)], // sign 1
    [4, new THREE.Color(0x99bbcc)],
    [6, new THREE.Color(0xffcc66)], // sign 1
    [6, new THREE.Color(0xffffff)], // curve
    [6, new THREE.Color(0x99bbcc)],
    [6, new THREE.Color(0xcccccc)],
    [8, new THREE.Color(0xffee33)], // tunnel
    [16, new THREE.Color(0xff9933)], // tunnel
    [8, new THREE.Color(0xffee33)], // tunnel
    [6, new THREE.Color(0xffffff)],
    [6, new THREE.Color(0x99bbcc)],
    [6, new THREE.Color(0xffffff)],
    [6, new THREE.Color(0xcccccc)],
    [6, new THREE.Color(0x99bbcc)],
    [6, new THREE.Color(0xffffff)],
    [20, new THREE.Color(0xffffff)],
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
    [new THREE.Color(0xcccccc)]
  );

  return colors;
}
