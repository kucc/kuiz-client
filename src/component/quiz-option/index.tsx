import React, { useState } from "react";
import { QuizOptionProps } from "./types";
import { THEME_COLOR } from "@asset/constant";
import * as S from "./styles";

const QuizOption = ({ quiz }: QuizOptionProps) => {
  const [disabled, setDisabled] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const getSelectedOption = (e: any) => {
    const selected = e.target.value;
    setDisabled(true);
    setSelectedOption(selected);
  };

  const optionArray = [quiz.option1, quiz.option2, quiz.option3, quiz.option4];

  return (
    <S.OptionContainer>
      {optionArray.map((option, idx) => (
        <S.Option
          key={idx}
          onClick={getSelectedOption}
          value={option}
          disabled={disabled ? true : false}
          color={
            disabled
              ? selectedOption === quiz.answer && selectedOption === option
                ? "green"
                : selectedOption != quiz.answer && selectedOption === option
                ? "red"
                : option === quiz.answer
                ? "green"
                : THEME_COLOR.GRAY
              : THEME_COLOR.GRAY
          }
        >
          {option}
        </S.Option>
      ))}
    </S.OptionContainer>
  );
};

export default QuizOption;
