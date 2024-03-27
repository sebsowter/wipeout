import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Suspense } from "react";

import { Loading } from "./components/atoms/Loading";
import { Game } from "./components/game/Game";
import { Hud } from "./components/organisms";

import GlobalStyle from "./styles";
import * as Styles from "./App.styles";

gsap.registerPlugin(useGSAP);

export function App() {
  return (
    <Styles.Wrapper>
      <GlobalStyle />
      <Suspense fallback={<Loading />}>
        <Game />
        <Hud />
      </Suspense>
    </Styles.Wrapper>
  );
}
