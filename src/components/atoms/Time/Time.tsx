import { PropsWithChildren } from "react";

import * as Styles from "./Time.styles";

export interface TimeProps extends PropsWithChildren {}

export function Time({ children }: TimeProps) {
  return <Styles.Time>{children}</Styles.Time>;
}
