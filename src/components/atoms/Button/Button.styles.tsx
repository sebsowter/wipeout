import styled from "styled-components";

export const Button = styled.button`
  outline: 0;
  border: 0;
  padding: 1rem 2rem;
  font-family: wipeout;
  font-size: 2rem;
  color: var(--color-black);
  background-color: var(--color-orange);
  clip-path: polygon(0% 0%, 100% 0, 100% 70%, 90% 100%, 0% 100%);

  &:hover {
    cursor: pointer;
  }
`;
