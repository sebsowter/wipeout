import { useGameStore } from "../../../App";
import { Button } from "../../atoms/Button";
import { LapTime } from "../../atoms/LapTime";
import { Time } from "../../atoms/Time";

import * as Styles from "./PlayerHud.styles";

export function PlayerHud() {
  const { lapTimes, mode, time, updateMode } = useGameStore();

  return (
    <Styles.Wrapper $isOpen={mode === "player"}>
      <Styles.Times>
        <Styles.H3>LAP TIME</Styles.H3>
        <Time size="large" value={time} />
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
