import styled from "styled-components";
import { BREAKPOINT } from "@asset/constant";

export const QuizContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const QuizWrapper = styled.div`
  width: 90%;
  background-color: white;
  border-radius: 4rem;
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem 0rem;
  @media only screen and (min-width: ${BREAKPOINT}px) {
    width: 60%;
  }
`;
