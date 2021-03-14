import styled from "styled-components";
import { BREAKPOINT, THEME_COLOR } from "@asset/constant";

export const Container = styled.div`
  width: 100%;
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// not using
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  width: 80%;
  height: 100%;

  @media only screen and (min-width: ${BREAKPOINT}px) {
    width: 80%;
    padding: 0rem 5rem;
  }
`;

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const QuizQuestionContainer = styled.div`
  margin-top: 2rem;
  width: 80%;
  height: 6rem;
  display: flex;
  flex-direction: center;
  justify-content: center;
  align-items: center;
  border: solid 1.5px transparent;
  border-color: gray;
  border-style: dashed;
  border-radius: 0.7rem;

  background-color: ${THEME_COLOR.GRAY};
`;

export const Title = styled.div`
  color: blue;
  width: 5rem;
  padding-left: 1rem;
  padding-bottom: 2rem;
`;
