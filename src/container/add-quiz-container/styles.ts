import styled from "styled-components";
import { THEME_COLOR } from "@asset/constant";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 0.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const QuizContainer = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  margin-top: 2.2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
