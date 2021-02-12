import React, { useState, useEffect } from "react";
import { QuizOptionProps } from "./types";
import { THEME_COLOR } from "@asset/constant";
import * as S from "./styles";

const QuizOption = (props: QuizOptionProps) => {
  const { quiz, clickEvent } = props;
  const [solved, setSolved] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const checkAnswer = (e: any) => {
    const selected = e.target.value;
    setSolved(true);
    setSelectedOption(selected);
  };

  useEffect(() => {}), [solved, selectedOption];

  const optionArray = [quiz.option1, quiz.option2, quiz.option3, quiz.option4];

  return (
    <>
      <S.OptionContainer>
        {optionArray.map((option, idx) => (
          <S.Option
            key={idx}
            onClick={checkAnswer}
            value={option}
            disabled={solved ? true : false}
            color={
              solved
                ? selectedOption === quiz.answer && selectedOption === option
                  ? "#03c75a"
                  : selectedOption != quiz.answer && selectedOption === option
                  ? "#c4042a"
                  : option === quiz.answer
                  ? "#03c75a"
                  : "#c4c4c4"
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
            <S.NextButton onClick={clickEvent}>다음 문제로</S.NextButton>
          </S.NextButtonContainer>
        </>
      ) : null}
    </>
  );
};

export default QuizOption;
