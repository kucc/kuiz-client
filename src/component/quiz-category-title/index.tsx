import React from "react";
import { QuizCategoryTitleProps } from "./types";
import * as S from "./styles";

const QuizCategoryTitle = (props: QuizCategoryTitleProps) => {
  return (
    <S.TitleContainer>
      <S.Title>{props.title}</S.Title>
    </S.TitleContainer>
  );
};

export default QuizCategoryTitle;
