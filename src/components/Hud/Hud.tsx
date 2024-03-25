import { CameraHud } from "./CameraHud";
import * as Styles from "./Hud.styles";
import { PlayerHud } from "./PlayerHud";

export const Hud: React.FC = () => {
  return (
    <Styles.Wrapper>
      <PlayerHud />
      <CameraHud />
    </Styles.Wrapper>
  );
};
