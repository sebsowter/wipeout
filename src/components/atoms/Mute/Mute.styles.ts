import styled, { keyframes } from "styled-components";

const audioAnimation = keyframes`
  0% {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(0.25);
  }
  100% { 
    transform: scaleY(1);
  }
`;

export const Inner = styled.span`
  position: absolute;
  display: block;
  width: 0.5rem;
  height: 1.2rem;
  bottom: 0;
  left: 0;
  background-color: var(--color-black);
  transform-origin: bottom left;
  transform: scaleY(0.25);
  animation-name: ${audioAnimation};
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;

  &:nth-child(1) {
    animation-delay: 0s;
    left: 0rem;
  }

  &:nth-child(2) {
    animation-delay: 0.3s;
    left: 0.75rem;
  }

  &:nth-child(3) {
    animation-delay: 0.5s;
    left: 1.5rem;
  }

  &:nth-child(4) {
    animation-delay: 0.1s;
    left: 2.25rem;
  }

  &:nth-child(5) {
    animation-delay: 0.2s;
    left: 3rem;
  }
`;

export const Wrapper = styled.div<{ $isMuted: boolean }>(
  ({ $isMuted }) => `
    position: relative;
    width: 3.5rem;
    height: 1.4rem;

    ${Inner} {
      ${$isMuted ? "animation-name: none;" : undefined}
    }
  `
);
