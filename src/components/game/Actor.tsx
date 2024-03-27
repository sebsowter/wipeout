import { useFrame } from "@react-three/fiber";
import { useEffect, useLayoutEffect, useRef } from "react";
import * as THREE from "three";

import { useGameStore } from "../../state";
import {
  SPEED_ACCELERATION,
  SPEED_BOOST_ACCELERATION,
  SPEED_BOOST_MAX,
  SPEED_DECELERATION,
  SPEED_MAX,
  START_POSITION,
  START_ROTATION,
  TURN_ACCELERATION,
  TURN_DECELERATION,
} from "../../constants";
import { useAudio, useCollisions } from "../../hooks";
import { minMaxSpeed, minMaxTurn, reduceSpeed, reduceTurn } from "../../utils/utils";

import { Shadow } from "./Shadow";
import { Vehicle } from "./Vehicle";

export interface ActorProps {
  curve: THREE.CurvePath<THREE.Vector3>;
}

export function Actor({ curve }: ActorProps) {
  const { checkpoint, isControllable, mode, updateCheckpoint } = useGameStore();

  const { getBoost, getHit, getY } = useCollisions();

  const [{ boost, collide, crowd, engine }] = useAudio();

  const isDownRef = useRef(false);
  const isLeftRef = useRef(false);
  const isRightRef = useRef(false);
  const isUpRef = useRef(false);
  const groupRef = useRef<THREE.Group>(null!);
  const vehicleRef = useRef<THREE.Mesh>(null!);
  const shadowRef = useRef<THREE.Mesh>(null!);
  const cameraPositionRef = useRef<THREE.Mesh>(null!);
  const cameraTargetRef = useRef<THREE.Mesh>(null!);
  const speedRef = useRef(0);
  const turnRef = useRef(0);
  const repulsionRef = useRef(new THREE.Vector3());

  const repulsionVector = new THREE.Vector3();
  const crowdVector = new THREE.Vector3(24, 0, 0);
  const presentPosition = new THREE.Vector3();
  const futurePosition = new THREE.Vector3();
  const directionVector2 = new THREE.Vector2();
  const directionVector3 = new THREE.Vector3();
  const forwardVector2 = new THREE.Vector2();
  const forwardVector3 = new THREE.Vector3();
  const cameraQuaternion = new THREE.Quaternion();
  const vehicleQuaternion = new THREE.Quaternion();
  const vector2 = new THREE.Vector2();
  const vector3 = new THREE.Vector3();
  const euler = new THREE.Euler();
  const quaternion = new THREE.Quaternion();

  const onKeyDown = (event: KeyboardEvent) => {
    const keyCode = event.key;

    if (keyCode === "w" || keyCode === "ArrowUp") {
      isUpRef.current = true;
    } else if (keyCode === "s" || keyCode === "ArrowDown") {
      isDownRef.current = true;
    } else if (keyCode === "a" || keyCode === "ArrowLeft") {
      isLeftRef.current = true;
    } else if (keyCode === "d" || keyCode === "ArrowRight") {
      isRightRef.current = true;
    }
  };

  const onKeyUp = (event: KeyboardEvent) => {
    const keyCode = event.key;

    if (keyCode === "w" || keyCode === "ArrowUp") {
      isUpRef.current = false;
    } else if (keyCode === "s" || keyCode === "ArrowDown") {
      isDownRef.current = false;
    } else if (keyCode === "a" || keyCode === "ArrowLeft") {
      isLeftRef.current = false;
    } else if (keyCode === "d" || keyCode === "ArrowRight") {
      isRightRef.current = false;
    }
  };

  useFrame((state, delta) => {
    switch (mode) {
      case "player":
        // Handle checkpoints.
        const pixel = getBoost(groupRef.current.position);

        if (pixel) {
          const [r, g, b] = pixel;

          if (r === 0) {
            if (g === 255 && checkpoint) {
              updateCheckpoint(false);
            }

            if (b === 255 && !checkpoint) {
              updateCheckpoint(true);
            }
          } else if (r === 255 && g === 0) {
            speedRef.current = Math.min(speedRef.current + SPEED_BOOST_ACCELERATION, SPEED_BOOST_MAX);

            if (boost && !boost.isPlaying) {
              boost.play();
            }
          }
        }

        // Handle collisions.
        groupRef.current.getWorldDirection(directionVector3);

        directionVector2.set(directionVector3.x, directionVector3.z);

        const collision = getHit(groupRef.current.position, directionVector2);

        repulsionVector.set(0, 0, 0);

        if (collision) {
          const [left, right] = collision;
          const value = Math.max(speedRef.current, 0.01);

          if (right > left) {
            repulsionVector.setX(value);
            speedRef.current *= delta * 15;
          } else if (right < left) {
            repulsionVector.setX(-value);
            speedRef.current *= delta * 15;
          } else {
            repulsionVector.setZ(-value);
            speedRef.current *= delta * 30;
          }

          repulsionRef.current.copy(repulsionVector.applyEuler(groupRef.current.rotation));

          if (collide && !collide.isPlaying) {
            collide.play();
          }
        } else {
          repulsionRef.current.lerp(repulsionVector, 0.1);
        }

        // Handle controls.
        if (isControllable) {
          if (isUpRef.current) {
            speedRef.current = minMaxSpeed(speedRef.current + delta * SPEED_ACCELERATION);
          } else if (isDownRef.current) {
            speedRef.current = minMaxSpeed(speedRef.current - delta * SPEED_ACCELERATION);
          } else {
            speedRef.current = reduceSpeed(speedRef.current, delta * SPEED_DECELERATION);
          }

          if (isLeftRef.current && isRightRef.current) {
            turnRef.current = reduceTurn(turnRef.current, delta * TURN_DECELERATION);
          } else if (isLeftRef.current) {
            turnRef.current = minMaxTurn(turnRef.current + delta * TURN_ACCELERATION);
          } else if (isRightRef.current) {
            turnRef.current = minMaxTurn(turnRef.current - delta * TURN_ACCELERATION);
          } else {
            turnRef.current = reduceTurn(turnRef.current, delta * TURN_DECELERATION);
          }
        } else {
          speedRef.current = reduceSpeed(speedRef.current, delta * SPEED_DECELERATION);
          turnRef.current = reduceTurn(turnRef.current, delta * TURN_DECELERATION);
        }

        // Rotate vehicle.
        forwardVector2.set(2, 0).rotateAround(vector2, directionVector2.angle());
        forwardVector3.copy(groupRef.current.position.clone().add(vector3.set(forwardVector2.x, 0, forwardVector2.y)));

        const previousY = getY(groupRef.current.position);
        const currentY = getY(forwardVector3);
        const deltaY = previousY - currentY;

        vehicleRef.current.rotation.setFromQuaternion(
          vehicleQuaternion
            .setFromEuler(vehicleRef.current.rotation)
            .slerp(
              quaternion.setFromEuler(
                euler.set(Math.PI + deltaY, -turnRef.current * 5, Math.PI + turnRef.current * 30)
              ),
              0.1
            )
        );

        // Rotate shadow.
        shadowRef.current.rotation.y = -vehicleRef.current.rotation.y * -2;

        // Move actor.
        groupRef.current.rotateY(turnRef.current);
        groupRef.current.position.add(directionVector3.multiplyScalar(speedRef.current)).add(repulsionRef.current);
        groupRef.current.position.lerp(groupRef.current.position.clone().setY(previousY), 0.25);

        // Move camera.
        cameraPositionRef.current.rotation.setFromQuaternion(
          cameraQuaternion
            .setFromEuler(cameraPositionRef.current.rotation)
            .slerp(
              quaternion.setFromEuler(
                euler.set(
                  cameraPositionRef.current.rotation.x,
                  cameraPositionRef.current.rotation.y,
                  Math.PI + turnRef.current * 5
                )
              ),
              0.25
            )
        );
        cameraPositionRef.current.getWorldPosition(state.camera.position);
        cameraPositionRef.current.getWorldQuaternion(state.camera.quaternion);

        engine
          ?.setVolume(0.4 + (speedRef.current / SPEED_MAX) * 0.3)
          .setDetune(-100 + (speedRef.current / SPEED_MAX) * 1000);
        crowd?.setVolume(Math.max(0, (1 / 100) * (50 - groupRef.current.position.distanceTo(crowdVector)) * 0.5));
        break;

      case "camera":
        const time = state.clock.getElapsedTime();
        const looptime = 20;
        const presentTime = (time % looptime) / looptime;
        const futureTime = ((time + 0.001) % looptime) / looptime;

        curve.getPointAt(presentTime, presentPosition);
        curve.getPointAt(futureTime, futurePosition);

        // Move actor.
        groupRef.current.position.copy(presentPosition);
        groupRef.current.lookAt(futurePosition);

        // Move camera.
        cameraPositionRef.current.getWorldPosition(state.camera.position);
        cameraPositionRef.current.getWorldQuaternion(state.camera.quaternion);
        break;

      default:
        break;
    }
  });

  useLayoutEffect(() => {
    cameraPositionRef.current.lookAt(cameraTargetRef.current.position);
  }, []);

  useEffect(() => {
    if (mode === "player") {
      speedRef.current = 0;
      turnRef.current = 0;
      groupRef.current.position.copy(START_POSITION);
      groupRef.current.rotation.copy(START_ROTATION);
    }

    const vehicleQuaternion = new THREE.Quaternion();
    const euler = new THREE.Euler();

    vehicleRef.current.rotation.setFromQuaternion(vehicleQuaternion.setFromEuler(euler.set(0, Math.PI, 0)));
    cameraPositionRef.current.rotation.copy(
      euler.set(cameraPositionRef.current.rotation.x, cameraPositionRef.current.rotation.y, Math.PI)
    );
  }, [crowd, engine, mode]);

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown, false);
    document.addEventListener("keyup", onKeyUp, false);

    return () => {
      document.removeEventListener("keydown", onKeyDown, false);
      document.removeEventListener("keyup", onKeyUp, false);
    };
  }, []);

  return (
    <group ref={groupRef}>
      {/* Set these to adjust camera position when viewed behind the actor. */}
      <mesh ref={cameraTargetRef} position={new THREE.Vector3(0, 0.5, -4)} />
      <mesh ref={cameraPositionRef} position={new THREE.Vector3(0, 0.6, -0.75)} />
      <Shadow ref={shadowRef} />
      <Vehicle ref={vehicleRef} />
    </group>
  );
}
