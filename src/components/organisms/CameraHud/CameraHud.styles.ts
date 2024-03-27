import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

export const LetterBar = styled.div<{ $isOpen: boolean; $position: "bottom" | "top" }>(
  ({ $isOpen, $position }) => `
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0;
    width: 100%;
    height: 20%;
    background-color: black;
    ${$position === "top" ? `top: 0;` : `bottom: 0;`}
    transform: translateY(${$isOpen ? "0" : $position === "top" ? "-100%" : "100%"});
  `
);
