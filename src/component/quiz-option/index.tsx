import React, { useState } from "react";
import { QuizOptionProps } from "./types";
import { THEME_COLOR } from "@asset/constant";
import * as S from "./styles";

const QuizOption = ({ quiz }: QuizOptionProps) => {
  const [solved, setSolved] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const getSelectedOption = (e: any) => {
    const selected = e.target.value;
    setSolved(true);
    setSelectedOption(selected);
  };

  const optionArray = [quiz.option1, quiz.option2, quiz.option3, quiz.option4];

  return (
    <>
      <S.OptionContainer>
        {optionArray.map((option, idx) => (
          <S.Option
            key={idx}
            onClick={getSelectedOption}
            value={option}
            disabled={solved ? true : false}
            color={
              solved
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
      {solved ? (
        <>
          <S.DescriptionContainer>
            <S.Description>{quiz.description}</S.Description>
          </S.DescriptionContainer>
          <S.NextButtonContainer>
            <S.NextButton to="/">다음 문제로</S.NextButton>
          </S.NextButtonContainer>
        </>
      ) : null}
    </>
  );
};

export default QuizOption;
