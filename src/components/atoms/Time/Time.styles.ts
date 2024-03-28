import styled from "styled-components";

export const Large = styled.span`
  display: inline-block;
  font-size: 5rem;
`;

export const Small = styled.span`
  display: inline-block;
  font-size: 3rem;
`;

export const Wrapper = styled.span<{ $size: "default" | "large" }>(
  ({ $size }) => `
    display: inline-block;
    width: max-content;
    margin: 0 0 ${$size === "large" ? 2 : 0.5}rem 0;
    font-family: wipeout;
    color: var(--color-white);

    ${Large} {
      font-size: ${$size === "large" ? 5 : 1.5}rem;
    }

    ${Small} {
      font-size: ${$size === "large" ? 3 : 1}rem;
    }
  `
);
