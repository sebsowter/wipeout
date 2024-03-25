import { useGameStore } from "../../../App";

import * as Styles from "./PlayerHud.styles";

export const PlayerHud: React.FC = () => {
  const mode = useGameStore((state) => state.mode);
  const time = useGameStore((state) => state.time);

  return (
    <Styles.Wrapper>
      <Styles.Times></Styles.Times>
    </Styles.Wrapper>
  );
};
