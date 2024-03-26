import { ButtonHTMLAttributes } from "react";

import * as Styles from "./Button.styles";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "default" | "large";
}

export function Button({ children, size = "default", ...rest }: ButtonProps) {
  return (
    <Styles.Button $size={size} {...rest}>
      {children}
    </Styles.Button>
  );
}
