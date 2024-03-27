import { getRoadCurve } from "../../utils/utils";

import { Actor } from "./Actor";
import { SkyBox } from "./Skybox";
import { Track } from "./Track";

export function Scene() {
  const curve = getRoadCurve();

  return (
    <>
      <SkyBox />
      <Track curve={curve} />
      <Actor curve={curve} />
    </>
  );
}
