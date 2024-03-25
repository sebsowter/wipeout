import { PropsWithChildren } from "react";

import * as Styles from "./LapTime.styles";

export interface LapTimeProps extends PropsWithChildren {}

export function LapTime({ children }: LapTimeProps) {
  return <Styles.LapTime>{children}</Styles.LapTime>;
}
