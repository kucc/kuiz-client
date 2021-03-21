import styled from "styled-components/macro";
import { THEME_COLOR, BREAKPOINT } from "@asset/constant";

export const QuizCategoryItem = styled.div`
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: center;
`;

export const TypeOptions = styled.select`
  width: 100%;
  height: 4rem;

  font-size: 1.4rem;
  color: ${THEME_COLOR.PRIMARY};
  background-color: white;

  border: 1px solid ${THEME_COLOR.PRIMARY};
  border-radius: 0.7rem;

  padding: 0.8rem 0.8rem;

  @media only screen and (min-width: ${BREAKPOINT}px) {
    font-size: 1.6rem;
  }
`;

export const Option = styled.option`
  width: 30rem;
  border: 1px solid ${THEME_COLOR.GRAYER};
`;
