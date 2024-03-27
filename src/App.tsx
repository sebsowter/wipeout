import { Game } from "./components/game/Game";
import { Hud } from "./components/organisms";

import GlobalStyle from "./styles";
import * as Styles from "./App.styles";

export function App() {
  return (
    <Styles.Wrapper>
      <GlobalStyle />
      <Game />
      <Hud />
    </Styles.Wrapper>
  );
}
