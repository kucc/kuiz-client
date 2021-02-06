import React from "react";
import * as S from "./styles";
import { QuizCategoryItemProps } from "./types";

const QuizCategoryItem = (props: QuizCategoryItemProps) => {
  return (
    <S.QuizCategoryItem>
      <S.QuizCategoryItemContainer to="/quiz-list">
        <S.QuizCategoryIcon></S.QuizCategoryIcon>
        <S.QuizCategoryTitle>{props.text}</S.QuizCategoryTitle>
      </S.QuizCategoryItemContainer>
    </S.QuizCategoryItem>
  );
};
export default QuizCategoryItem;
