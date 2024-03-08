import { Wipeout } from "./src/js/Wipeout";

(function (global, document) {
  const wipeout = new Wipeout(document, self.innerWidth, self.innerHeight);

  function animate() {
    requestAnimationFrame(animate);

    wipeout.update();
  }

  function resize() {
    wipeout.resize(self.innerWidth, self.innerHeight);

    const html = document.getElementsByTagName("html")[0];

    if (self.innerWidth < 600 || self.innerHeight < 400) {
      html.style.fontSize = "0.4em";
    } else if (self.innerWidth < 800 || self.innerHeight < 600) {
      html.style.fontSize = "0.75em";
    } else {
      html.style.fontSize = "1em";
    }
  }

  global.addEventListener("resize", () => resize(), false);
  global.addEventListener("fullscreen", () => resize(), false);

  resize();
  animate();
})(window, document);
