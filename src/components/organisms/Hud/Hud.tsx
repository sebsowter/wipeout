import { CameraHud } from "../CameraHud";
import { PlayerHud } from "../PlayerHud";

import * as Styles from "./Hud.styles";

export function Hud() {
  return (
    <Styles.Wrapper>
      <CameraHud />
      <PlayerHud />
    </Styles.Wrapper>
  );
}
