import screen1 from "../assets/images/screenFront.png";
import screen2 from "../assets/images/screen2.png";
import screen3 from "../assets/images/screen3.png";
import screen4 from "../assets/images/screen4.png";
import buildingUrl from "../assets/images/building.png";
import pillarUrl from "../assets/images/pillar.png";
import ship from "../assets/images/ship.png";
import shadow from "../assets/images/shadow.png";
import terrain from "../assets/images/terrain.png";
import track1Url from "../assets/images/track1.png";
import track2Url from "../assets/images/track2.png";
import track3Url from "../assets/images/track3.png";
import track4Url from "../assets/images/track4.png";
import track5Url from "../assets/images/track5.png";
import track6Url from "../assets/images/track6.png";
import displacement from "../assets/images/displacement.png";
import collisionMap from "../assets/images/collision.png";
import rock from "../assets/images/rock.png";
import standUrl from "../assets/images/stand.png";
import skyleft from "../assets/images/sky/skyleft.png";
import skyright from "../assets/images/sky/skyright.png";
import skytop from "../assets/images/sky/skytop.png";
import skybottom from "../assets/images/sky/skybottom.png";
import skyfront from "../assets/images/sky/skyfront.png";
import skyback from "../assets/images/sky/skyback.png";
import lights1 from "../assets/images/lights1.png";
import lights2 from "../assets/images/lights2.png";
import lights3 from "../assets/images/lights3.png";
import flames from "../assets/images/flames.png";

import crowd from "../assets/audio/Crowd.wav";
import engine from "../assets/audio/Engine.wav";
import ramShip from "../assets/audio/RamShip.wav";
import boost from "../assets/audio/Boost.wav";
import ready from "../assets/audio/Ready.wav";
import go from "../assets/audio/Go.wav";
import chemicalBeats from "../assets/audio/ChemicalBeats.mp3";

export const audio = {
  music: chemicalBeats,
  boost: boost,
  crowd: crowd,
  engine: engine,
  ramShip: ramShip,
  ready: ready,
  go: go,
};

export const textures = {
  collisionMap: collisionMap,
  flames: flames,
  ground1: track1Url,
  ground2: track2Url,
  ground3: track3Url,
  ground4: track4Url,
  ground5: track5Url,
  ground6: track6Url,
  heightMap: displacement,
  lights1: lights1,
  lights2: lights2,
  lights3: lights3,
  pillar: pillarUrl,
  rock: rock,
  screen1: screen1,
  screen2: screen2,
  screen3: screen3,
  screen4: screen4,
  ship: ship,
  shadow: shadow,
  stand: buildingUrl,
  terrain: terrain,
};

export const skybox = [skyright, skyleft, skytop, skybottom, skyfront, skyback];
