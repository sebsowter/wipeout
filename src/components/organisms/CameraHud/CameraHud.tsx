import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

import { useGameStore } from "../../../state";
import { Button } from "../../atoms/Button";

import * as Styles from "./CameraHud.styles";

export function CameraHud() {
  const { mode, updateMode } = useGameStore();

  const [isOpen, setOpen] = useState(mode === "camera");

  const topBar = useRef<HTMLDivElement>(null);
  const bottomBar = useRef<HTMLDivElement>(null);

  useGSAP(() => gsap.set(topBar.current, { top: isOpen ? "0%" : "-100%" }), { scope: topBar });

  useGSAP(
    () =>
      gsap.to(topBar.current, {
        top: isOpen ? "0%" : "-100%",
        duration: 1,
        ease: isOpen ? "Quint.easeOut" : "sine.in",
      }),
    { dependencies: [isOpen], scope: topBar }
  );

  useGSAP(() => gsap.set(bottomBar.current, { bottom: isOpen ? "0%" : "-100%" }), { scope: bottomBar });

  useGSAP(
    () =>
      gsap.to(bottomBar.current, {
        bottom: isOpen ? "0%" : "-100%",
        duration: 1,
        ease: isOpen ? "Quint.easeOut" : "sine.in",
        onComplete: !isOpen ? () => updateMode("player") : undefined,
      }),
    { dependencies: [isOpen, updateMode], scope: bottomBar }
  );

  useEffect(() => (mode === "camera" ? setOpen(true) : undefined), [mode]);

  return (
    <Styles.Wrapper>
      <Styles.LetterBar $position="top" ref={topBar} />
      <Styles.LetterBar $position="bottom" ref={bottomBar}>
        <Button onClick={() => setOpen(false)} size="large">
          PLAY
        </Button>
      </Styles.LetterBar>
    </Styles.Wrapper>
  );
}
