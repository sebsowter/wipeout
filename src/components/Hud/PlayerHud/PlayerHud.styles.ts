import styled from "styled-components";

export const Times = styled.div`
  position: absolute;
  top: 2.4rem;
  left: 2.4rem;
`;

export const Ui = styled.div`
  position: absolute;
  bottom: 2.4rem;
  left: 2.4rem;
`;

export const Wrapper = styled.div<{ $isOpen: boolean }>(
  ({ $isOpen }) => `
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    left: ${$isOpen ? 0 : -100}%;
  `
);

export const H3 = styled.h3``;
