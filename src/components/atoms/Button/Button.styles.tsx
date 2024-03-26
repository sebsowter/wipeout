import styled from "styled-components";

export const Button = styled.button<{ $size: "default" | "large" }>(
  ({ $size }) => `
    outline: 0;
    border: 0;
    padding: ${$size === "large" ? "1rem 2rem" : "0.5rem 1rem"};
    font-family: wipeout;
    font-size: ${$size === "large" ? 2 : 1.5}rem;
    color: var(--color-black);
    background-color: var(--color-orange);
    clip-path: polygon(0% 0%, 100% 0, 100% 70%, 90% 100%, 0% 100%);

    &:hover {
      cursor: pointer;
    }
  `
);
