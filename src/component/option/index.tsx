import React, { ReactElement } from "react";
import * as S from "./styles";
import { QuizCategorySelectProps } from "./types";

const QuizCategorySelect = ({
  options,
  defaultOption,
  disabled,
  onChange,
}: QuizCategorySelectProps): ReactElement => {
  return (
    <S.TypeOptions
      onChange={onChange}
      defaultValue={defaultOption}
      disabled={disabled}
    >
      {options.map((option) => (
        <S.Option key={`option${option.id}`} value={option.id}>
          {option.name}
        </S.Option>
      ))}
    </S.TypeOptions>
  );
};

export default QuizCategorySelect;
