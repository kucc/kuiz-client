import React, { useState, useEffect } from "react";
import { QuizOptionProps } from "./types";
import { THEME_COLOR } from "@asset/constant";
import * as S from "./styles";

const QuizOption = (props: QuizOptionProps) => {
  const { quiz, clickEvent } = props;
  const [solved, setSolved] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [userAnswer, setUserAnswer] = useState("");
  const [correct, setCorrect] = useState(false);

  const checkChoiceAnswer = (e: any) => {
    const selected = e.target.value;
    setSolved(true);
    setSelectedOption(selected);
  };

  const checkWriteAnswer = (e: any) => {
    if (userAnswer === quiz.answer) {
      setCorrect(true);
    } else {
      setCorrect(false);
    }
    setSolved(true);
  };

  useEffect(() => {}), [solved, selectedOption];

  const optionArray = [quiz.option1, quiz.option2, quiz.option3, quiz.option4];
  const isChoice = quiz.isChoice;

  return (
    <>
      {isChoice ? (
        <S.ChoiceOptionContainer>
          {optionArray.map((option, idx) => (
            <S.ChoiceOption
              key={idx}
              onClick={checkChoiceAnswer}
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
            </S.ChoiceOption>
          ))}
        </S.ChoiceOptionContainer>
      ) : (
        <S.WriteOptionContainer>
          {solved ? (
            correct ? (
              <S.CorrectSign color={"#03c75a"}>O</S.CorrectSign>
            ) : (
              <S.CorrectSign color={"#c4042a"}>X</S.CorrectSign>
            )
          ) : (
            <>
              <S.InputBox
                placeholder={"정답을 입력하세요"}
                onChange={(e) => {
                  setUserAnswer(e.target.value);
                }}
              />
              <S.SubmitButton onClick={checkWriteAnswer}>제출</S.SubmitButton>
            </>
          )}
        </S.WriteOptionContainer>
      )}

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
