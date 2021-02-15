import { keyframes } from "styled-components";

export const spin = keyframes`
  from {
    transform: none;
  }
  to {
    transform: rotateY(360deg);
  }
`;
