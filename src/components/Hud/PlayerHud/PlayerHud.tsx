import { useGameStore } from "../../../App";
import { Button } from "../../atoms/Button";
import { LapTime } from "../../atoms/LapTime";
import { Time } from "../../atoms/Time";

import * as Styles from "./PlayerHud.styles";

export function PlayerHud() {
  const { lapTimes, mode, setMode, time } = useGameStore();

  return (
    <Styles.Wrapper $isOpen={mode === "player"}>
      <Styles.Times>
        <h3>LAP TIME</h3>
        <Time size="large" value={time} />
        <h3>TOP LAPS</h3>
        {lapTimes.map((value, index) => (
          <LapTime index={index} key={index} value={value} />
        ))}
      </Styles.Times>
      <Styles.Ui>
        <Button onClick={() => setMode("camera")}>Quit</Button>
      </Styles.Ui>
    </Styles.Wrapper>
  );
}
