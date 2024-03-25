import { formatTwoDigits } from "../../../utils/utils";

import * as Styles from "./Time.styles";

export interface TimeProps {
  size?: "default" | "large";
  value: number;
}

export function Time({ size = "default", value }: TimeProps) {
  return (
    <Styles.Wrapper $size={size}>
      <Styles.Large>{`${formatTwoDigits(Math.floor(value / 60))}:${formatTwoDigits(Math.floor(value % 60))}.`}</Styles.Large>
      <Styles.Small>{`${formatTwoDigits(Math.floor((value % 1) * 100))}`}</Styles.Small>
    </Styles.Wrapper>
  );
}
