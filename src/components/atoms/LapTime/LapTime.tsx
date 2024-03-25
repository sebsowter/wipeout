import { Time } from "../Time";
import * as Styles from "./LapTime.styles";

export interface LapTimeProps {
  index: number;
  value: number;
}

export function LapTime({ index, value }: LapTimeProps) {
  return (
    <Styles.Wrapper>
      <Styles.Index>{index + 1}.</Styles.Index>
      <Time value={value} />
    </Styles.Wrapper>
  );
}
