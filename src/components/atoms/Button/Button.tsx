import { ButtonHTMLAttributes, PropsWithChildren } from "react";

import * as Styles from "./Button.styles";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ children, ...rest }: ButtonProps) {
  return <Styles.Button {...rest}>{children}</Styles.Button>;
}
