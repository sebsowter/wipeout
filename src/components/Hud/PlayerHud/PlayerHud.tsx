import { useEffect, useState } from "react";
import { useGameStore } from "../../../App";
import { Button } from "../../atoms/Button";
import { LapTime } from "../../atoms/LapTime";
import { Time } from "../../atoms/Time";

import * as Styles from "./PlayerHud.styles";

export function PlayerHud() {
  const [time, setTime] = useState(new Date().valueOf());

  const { isControllable, lapTimes, lapTimeStart, mode, updateMode } = useGameStore();

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date().valueOf() - lapTimeStart), 10);

    return () => clearInterval(interval);
  }, [isControllable, lapTimeStart]);

  return (
    <Styles.Wrapper $isOpen={mode === "player"}>
      <Styles.Times>
        <Styles.H3>LAP TIME</Styles.H3>
        <Time size="large" value={time / 1000} />
        <Styles.H3>BEST LAPS</Styles.H3>
        {lapTimes.map((value, index) => (
          <LapTime index={index} key={index} value={value} />
        ))}
      </Styles.Times>
      <Styles.Ui>
        <Button onClick={() => updateMode("camera")}>Quit</Button>
      </Styles.Ui>
    </Styles.Wrapper>
  );
}
