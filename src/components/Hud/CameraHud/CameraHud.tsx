import { useGameStore } from "../../../App";
import { Button } from "../../atoms/Button";

import * as Styles from "./CameraHud.styles";

export const CameraHud: React.FC = () => {
  const mode = useGameStore((state) => state.mode);
  const setMode = useGameStore((state) => state.setMode);
  const isOpen = mode === "camera";

  console.log("mode", mode);
  console.log("isOpen", isOpen);

  return (
    <Styles.Wrapper>
      <Styles.LetterBar $isOpen={isOpen} $position="top" />
      <Styles.LetterBar $isOpen={isOpen} $position="bottom">
        <Button
          onClick={() => {
            console.log("onClick");
            setMode("player");
          }}
        >
          Play
        </Button>
      </Styles.LetterBar>
    </Styles.Wrapper>
  );
};
