import { useEffect, useState } from "react";

// Hook to handle direction keys.
// TODO: Handle mobile touch controls.

export const useKeys = () => {
  const [isDownDown, setDownDown] = useState(false);
  const [isLeftDown, setLeftDown] = useState(false);
  const [isRightDown, setRightDown] = useState(false);
  const [isUpDown, setUpDown] = useState(false);

  const onKeyDown = (event: KeyboardEvent) => {
    const keyCode = event.key;
    console.log("onKeyDown", keyCode);

    if (keyCode === "w" || keyCode === "ArrowUp") {
      setUpDown(true);
    } else if (keyCode === "s" || keyCode === "ArrowDown") {
      setDownDown(true);
    } else if (keyCode === "a" || keyCode === "ArrowLeft") {
      setLeftDown(true);
    } else if (keyCode === "d" || keyCode === "ArrowRight") {
      setRightDown(true);
    }
  };

  const onKeyUp = (event: KeyboardEvent) => {
    const keyCode = event.key;
    console.log("onKeyUp", keyCode);

    if (keyCode === "w" || keyCode === "ArrowUp") {
      setUpDown(false);
    } else if (keyCode === "s" || keyCode === "ArrowDown") {
      setDownDown(false);
    } else if (keyCode === "a" || keyCode === "ArrowLeft") {
      setLeftDown(false);
    } else if (keyCode === "d" || keyCode === "ArrowRight") {
      setRightDown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown, false);
    document.addEventListener("keyup", onKeyUp, false);

    return () => {
      document.removeEventListener("keydown", onKeyDown, false);
      document.removeEventListener("keyup", onKeyUp, false);
    };
  }, []);

  return {
    isDownDown,
    isLeftDown,
    isRightDown,
    isUpDown,
  };
};
