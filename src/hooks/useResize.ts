import { useEffect } from "react";

export function useResize() {
  useEffect(() => {
    const resize = () => {
      const html = document.getElementsByTagName("html")[0];

      /* eslint-disable-next-line no-restricted-globals */
      if (self.innerWidth < 600 || self.innerHeight < 400) {
        html.style.fontSize = "0.4em";

        /* eslint-disable-next-line no-restricted-globals */
      } else if (self.innerWidth < 800 || self.innerHeight < 600) {
        html.style.fontSize = "0.75em";
      } else {
        html.style.fontSize = "1em";
      }
    };

    global.addEventListener("resize", resize, false);
    global.addEventListener("fullscreen", resize, false);

    return () => {
      global.removeEventListener("resize", resize, false);
      global.removeEventListener("fullscreen", resize, false);
    };
  }, []);
}
