import React from "react";
import * as S from "./styles";

const QuizCategorySelect = () => {
  return (
    <S.TypeOptions>
      <S.Option>Computer Science</S.Option>
      <S.Option>잡동사니</S.Option>
      <S.Option>기타</S.Option>
    </S.TypeOptions>
  );
};
export default QuizCategorySelect;
