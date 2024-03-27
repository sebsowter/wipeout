import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--color-black);
`;

export const Inner = styled.div`
  position: absolute;
  display: block;
  width: max-content;
  margin: 0;
  font-family: wipeout;
  font-size: 2rem;
  color: var(--color-orange);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
