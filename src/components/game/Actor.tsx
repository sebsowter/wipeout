import { useFrame, useLoader } from "@react-three/fiber";
import { useLayoutEffect, useRef } from "react";
import * as THREE from "three";

import { useGameStore } from "../../App";
import { HEIGHT_MAX, HEIGHT_MIN, SPEED_ACCELERATION, TURN_ACCELERATION, TURN_DECELERATION } from "../../constants";
import { useKeys } from "../../hooks";
import { getCollision, getHeight, getImageDataFromTexture, getPixel } from "../../utils/utils";

import { Shadow } from "./Shadow";
import { Vehicle } from "./Vehicle";

export interface ActorProps {
  curve: THREE.CurvePath<THREE.Vector3>;
}

export function Actor({ curve }: ActorProps) {
  const collisionTexture = useLoader(THREE.TextureLoader, "./images/collision.png");
  const collisionImageData = getImageDataFromTexture(collisionTexture);

  const heightTexture = useLoader(THREE.TextureLoader, "./images/displacement.png");
  const heightImageData = getImageDataFromTexture(heightTexture);

  const groupRef = useRef<THREE.Group>(null!);
  const vehicleRef = useRef<THREE.Mesh>(null!);
  const cameraPositionRef = useRef<THREE.Mesh>(null!);
  const cameraTargetRef = useRef<THREE.Mesh>(null!);

  const {
    checkpoint,
    incrementSpeed,
    isControllable,
    lapTimeStart,
    lerpRepulsion,
    mode,
    multiplySpeed,
    position,
    reduceSpeed,
    reduceTurn,
    repulsion,
    rotation,
    updatePosition,
    speed,
    turn,
    updateCheckpoint,
    updateLapTimeStart,
    updateRepulsion,
    updateRotation,
    updateTime,
    updateTurn,
  } = useGameStore();

  const { isDownDown, isLeftDown, isRightDown, isUpDown } = useKeys();

  const getBoost = (position: THREE.Vector3) =>
    getPixel(collisionImageData, new THREE.Vector2(position.x, position.z), 8);
  const getHit = (position: THREE.Vector3, rotation: THREE.Vector2) =>
    getCollision(collisionImageData, position, rotation);
  const getY = (position: THREE.Vector3) => getHeight(heightImageData, position, HEIGHT_MIN, HEIGHT_MAX);

  //const rotation = vehicleRef.current ? vehicleRef.current.rotation : new THREE.Euler();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const looptime = 20;
    const presentTime = (time % looptime) / looptime;
    const futureTime = ((time + 0.001) % looptime) / looptime;
    const presentPosition = curve.getPointAt(presentTime, new THREE.Vector3());
    const futurePosition = curve.getPointAt(futureTime, new THREE.Vector3());

    switch (mode) {
      case "player":
        const direction3 = groupRef.current.getWorldDirection(new THREE.Vector3());
        const direction2 = new THREE.Vector2(direction3.x, direction3.z);

        const pixel = getBoost(groupRef.current.position);

        if (pixel) {
          const [r, g, b] = pixel;

          if (r === 0) {
            if (g === 255 && checkpoint) {
              updateCheckpoint(false);
              updateLapTimeStart(time);
            }

            if (b === 255 && !checkpoint) {
              updateCheckpoint(true);
            }
          } else if (r === 255 && g === 0) {
            //this.audio.boost.play();
            //setSpeed(Math.min(speed + SPEED_BOOST_ACCELERATION, SPEED_BOOST_MAX));
          }
        }

        // Handle collisions.
        const collision = getHit(groupRef.current.position, direction2);

        if (collision) {
          const [left, right] = collision;
          const repulsion2 = new THREE.Vector3();
          const value = Math.max(speed, 0.01);

          if (right > left) {
            repulsion2.x += value;

            multiplySpeed(0.25);
          } else if (right < left) {
            repulsion2.x += -value;

            multiplySpeed(0.25);
          } else {
            repulsion2.z += -value;

            multiplySpeed(0.25);
          }

          updateRepulsion(repulsion2.applyEuler(groupRef.current.rotation));
          //this.audio.ramShip.play();
        } else {
          //updateRepulsion(repulsion.clone().lerp(new THREE.Vector3(), 0.1));
          lerpRepulsion();
        }

        // Handle controls.
        if (isControllable) {
          if (isUpDown) {
            //this.audio.engine.play();
            incrementSpeed(SPEED_ACCELERATION);
          } else if (isDownDown) {
            incrementSpeed(-SPEED_ACCELERATION);
          } else {
            reduceSpeed(SPEED_ACCELERATION);
          }

          if (isLeftDown && isRightDown) {
            reduceTurn(TURN_DECELERATION);
          } else if (isLeftDown) {
            updateTurn(TURN_ACCELERATION);
          } else if (isRightDown) {
            updateTurn(-TURN_ACCELERATION);
          } else {
            reduceTurn(TURN_DECELERATION);
          }

          updateTime(time - lapTimeStart);
        } else {
          reduceSpeed(SPEED_ACCELERATION);
          reduceTurn(TURN_DECELERATION);
        }

        // this.updateCollision(direction3);
        // this.updateLap();

        groupRef.current.position.copy(position);
        groupRef.current.rotation.copy(rotation);
        groupRef.current.rotateY(turn);

        // Bank camera.
        const cameraRotation = cameraPositionRef.current.rotation.clone();
        const cameraQuaternion = new THREE.Quaternion();
        cameraQuaternion
          .setFromEuler(cameraPositionRef.current.rotation.clone())
          .slerp(
            new THREE.Quaternion().setFromEuler(
              new THREE.Euler(
                cameraPositionRef.current.rotation.x,
                cameraPositionRef.current.rotation.y,
                Math.PI + turn * 5
              )
            ),
            0.25
          );

        cameraPositionRef.current.rotation.setFromQuaternion(cameraQuaternion);

        // Rotate model.
        const forward2 = new THREE.Vector2(2, 0).rotateAround(new THREE.Vector2(), direction2.angle());
        const forward3 = groupRef.current.position.clone().add(new THREE.Vector3(forward2.x, 0, forward2.y));
        const previousY = getY(groupRef.current.position);
        const currentY = getY(forward3);
        const deltaY = previousY - currentY;

        const vehicleQuaternion = new THREE.Quaternion()
          .setFromEuler(vehicleRef.current.rotation.clone())
          .slerp(
            new THREE.Quaternion().setFromEuler(new THREE.Euler(Math.PI + deltaY * 1, -turn * 5, Math.PI + turn * 30)),
            0.1
          );

        // Rotate model.
        vehicleRef.current.rotation.setFromQuaternion(vehicleQuaternion);
        //groupRef.current.shadow.rotation.y = -groupRef.current.model.rotation.y * -2;

        // Move actor.
        groupRef.current.position.add(direction3.multiplyScalar(speed)).add(repulsion);
        groupRef.current.position.lerp(groupRef.current.position.clone().setY(previousY), 0.25);

        updatePosition(groupRef.current.position);
        updateRotation(groupRef.current.rotation);

        // Move camera.
        cameraPositionRef.current.getWorldPosition(state.camera.position);
        cameraPositionRef.current.getWorldQuaternion(state.camera.quaternion);
        break;

      case "camera":
        // Move actor.
        groupRef.current.position.copy(presentPosition);
        groupRef.current.lookAt(futurePosition);

        // Move camera.
        // TODO: Add some banking.
        cameraPositionRef.current.getWorldPosition(state.camera.position);
        cameraPositionRef.current.getWorldQuaternion(state.camera.quaternion);
        break;

      default:
        break;
    }
  });

  // Set camera position to look at camera target.
  useLayoutEffect(() => {
    cameraPositionRef.current.lookAt(cameraTargetRef.current.position);
    vehicleRef.current.rotation.copy(rotation);
  }, []);

  return (
    <group ref={groupRef}>
      {/* Set these to adjust camera position when viewed behind the actor. */}
      <mesh ref={cameraTargetRef} position={new THREE.Vector3(0, 0.5, -4)} />
      <mesh ref={cameraPositionRef} position={new THREE.Vector3(0, 0.6, -0.75)} />
      <Shadow rotationY={0} />
      <Vehicle ref={vehicleRef} />
    </group>
  );
}
