import * as THREE from "three";

export const SPEED_MAX = 0.33;
export const SPEED_ACCELERATION = 0.06;
export const SPEED_DECELERATION = 0.12;
export const SPEED_BOOST_MAX = 0.5;
export const SPEED_BOOST_ACCELERATION = SPEED_BOOST_MAX - SPEED_MAX;

export const TURN_ACCELERATION = 0.12;
export const TURN_DECELERATION = 0.3;
export const TURN_MAX = 0.04;

export const HEIGHT_MIN = 0;
export const HEIGHT_MAX = 8.5;

export const START_POSITION = new THREE.Vector3(16, 0, 1);
export const START_ROTATION = new THREE.Euler(0, Math.PI, 0);
