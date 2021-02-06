import React from "react";
import { CategoryItemProps } from "./types";
import * as S from "./styles";

const QuizCategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <S.QuizCategoryItem>
      <S.QuizCategoryItemContainer to="/quiz-list">
        <S.QuizCategoryIcon></S.QuizCategoryIcon>
        <S.QuizCategoryTitle>{category.name}</S.QuizCategoryTitle>
      </S.QuizCategoryItemContainer>
    </S.QuizCategoryItem>
  );
};
export default QuizCategoryItem;
