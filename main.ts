import { Wipeout } from "./src/js/Wipeout";

(function (global, document) {
  const wipeout = new Wipeout(document, global.innerWidth, global.innerHeight);

  function animate() {
    requestAnimationFrame(animate);

    wipeout.update();
  }

  global.addEventListener(
    "resize",
    () => {
      wipeout.resize(global.innerWidth, global.innerHeight);
    },
    false
  );

  global.addEventListener(
    "fullscreen",
    () => {
      wipeout.resize(global.innerWidth, global.innerHeight);
    },
    false
  );

  animate();
})(window, document);
