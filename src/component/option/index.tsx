import React from "react";
import * as S from "./styles";
import { QuizCategorySelectProps } from "./types";

const QuizCategorySelect = ({ options, onChange }: QuizCategorySelectProps) => {
  return (
    <S.TypeOptions onChange={onChange}>
      {options.map((option) => (
        <S.Option key={`option${option.id}`} value={option.id}>
          {option.name}
        </S.Option>
      ))}
    </S.TypeOptions>
  );
};
export default QuizCategorySelect;
