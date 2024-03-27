import * as Styles from "./Mute.styles";

export interface MuteProps {
  isMuted: boolean;
}

export function Mute({ isMuted }: MuteProps) {
  return (
    <Styles.Wrapper $isMuted={isMuted}>
      <Styles.Inner />
      <Styles.Inner />
      <Styles.Inner />
      <Styles.Inner />
      <Styles.Inner />
    </Styles.Wrapper>
  );
}
