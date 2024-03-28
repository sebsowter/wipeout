import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

import { useGameStore } from "../../../state";
import { Button } from "../../atoms/Button";
import { LapTime } from "../../atoms/LapTime";
import { Mute } from "../../atoms/Mute";
import { LiveTime } from "../LiveTime";

import * as Styles from "./PlayerHud.styles";

export function PlayerHud() {
  const { isMuted, lapTimes, mode, updateMode, updateMuted } = useGameStore();

  const [isOpen, setOpen] = useState(mode === "player");

  const container = useRef<HTMLDivElement>(null);
  const lapTimesContainer = useRef<HTMLDivElement>(null);

  useGSAP(() => gsap.set(container.current, { x: isOpen ? "0%" : "-100%" }), { scope: container });

  useGSAP(
    () =>
      gsap.to(container.current, {
        x: isOpen ? "0%" : "-100%",
        duration: 0.5,
        ease: isOpen ? "Quint.easeOut" : "sine.in",
        onComplete: !isOpen ? () => updateMode("camera") : undefined,
      }),
    { dependencies: [isOpen, updateMode], scope: container }
  );

  useEffect(() => (mode === "player" ? setOpen(true) : undefined), [mode]);

  return (
    <Styles.Wrapper ref={container}>
      <Styles.Times>
        <Styles.H3>LAP TIME</Styles.H3>
        <LiveTime />
        {lapTimes.length && (
          <Styles.LapTimes ref={lapTimesContainer}>
            <Styles.H3>BEST LAPS</Styles.H3>
            {lapTimes.map((value, index) => (
              <LapTime index={index} key={index} value={value / 1000} />
            ))}
          </Styles.LapTimes>
        )}
      </Styles.Times>
      <Styles.Ui>
        <Button onClick={() => setOpen(false)}>QUIT</Button>
        <Button onClick={() => updateMuted(!isMuted)}>
          <Mute isMuted={isMuted} />
        </Button>
      </Styles.Ui>
    </Styles.Wrapper>
  );
}
