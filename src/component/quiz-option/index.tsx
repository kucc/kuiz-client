import React from "react";
import { QuizOptionProps } from "./types";
import * as S from "./styles";

const QuizOption = ({ quiz }: QuizOptionProps) => {
  return (
    <S.OptionContainer>
      <S.Option>{quiz.option1}</S.Option>
      <S.Option>{quiz.option2}</S.Option>
      <S.Option>{quiz.option3}</S.Option>
      <S.Option>{quiz.option4}</S.Option>
    </S.OptionContainer>
  );
};

export default QuizOption;
