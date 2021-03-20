import React, { useState, useEffect } from "react";
import { QuizOptionProps } from "./types";
import { THEME_COLOR } from "@asset/constant";
import * as S from "./styles";

const QuizOption = (props: QuizOptionProps) => {
  const {
    quiz,
    selectedOption,
    solved,
    correct,
    getUserAnswer,
    checkWriteAnswer,
    checkChoiceAnswer,
    goToNextQuiz,
  } = props;

  const optionArray = [quiz.option1, quiz.option2, quiz.option3, quiz.option4];
  const isChoice = quiz.isChoice;

  const getOptionColor = (solved: boolean, option?: string) => {
    const CORRECT_ANSWER = option === quiz.answer;

    const SELECTED_BUT_WRONG =
      option === selectedOption && option != quiz.answer;

    if (solved) {
      if (CORRECT_ANSWER) return "#03c75a";
      else if (SELECTED_BUT_WRONG) return "#c4042a";
      else return "#c4c4c4";
    } else return THEME_COLOR.GRAY;
  };

  return (
    <>
      {isChoice ? (
        <S.ChoiceOptionContainer>
          {optionArray.map((option, idx) => (
            <S.ChoiceOption
              key={idx}
              onClick={checkChoiceAnswer}
              value={idx + 1}
              disabled={solved ? true : false}
              color={getOptionColor(solved, String(idx + 1))}
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
                onChange={getUserAnswer}
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
            <S.NextButton onClick={goToNextQuiz}>다음 문제로</S.NextButton>
          </S.NextButtonContainer>
        </>
      ) : null}
    </>
  );
};

export default QuizOption;
