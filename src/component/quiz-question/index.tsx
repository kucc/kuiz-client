import React from "react";
import { QuizQuestionProps } from "./types";
import * as S from "./styles";

const QuizQuestion = (props: QuizQuestionProps) => {
  return (
    <S.QuestionContainer>
      <S.Question>Q. {props.question}</S.Question>
    </S.QuestionContainer>
  );
};

export default QuizQuestion;
