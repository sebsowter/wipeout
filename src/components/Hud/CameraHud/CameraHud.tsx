import { useGameStore } from "../../../App";
import { Button } from "../../atoms/Button";

import * as Styles from "./CameraHud.styles";

export function CameraHud() {
  const { mode, updateMode } = useGameStore();
  const isOpen = mode === "camera";

  return (
    <Styles.Wrapper>
      <Styles.LetterBar $isOpen={isOpen} $position="top" />
      <Styles.LetterBar $isOpen={isOpen} $position="bottom">
        <Button onClick={() => updateMode("player")} size="large">
          Play
        </Button>
      </Styles.LetterBar>
    </Styles.Wrapper>
  );
}
