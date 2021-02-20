import React, { useEffect, useState } from "react";
import { STATIC_URL } from "@asset/constant";
import * as S from "./styles";
import { QuizProgressBarProps } from "./types";

const QuizProgressBar = (props: QuizProgressBarProps) => {
  const { completed } = props;
  const [isZero, setIsZero] = useState(true);

  const checkIsZero = (completed) => {
    if (completed === 0) setIsZero(true);
    else setIsZero(false);
  };

  useEffect(() => {
    checkIsZero(completed);
  });

  return (
    <S.ProgressBarContainer>
      <S.ProgressBarIcon completed={props.completed}>
        <S.ProgressBarMan src={STATIC_URL.RUNNING_MAN}></S.ProgressBarMan>
        <S.ProgressBarFlag src={STATIC_URL.FLAG}></S.ProgressBarFlag>
      </S.ProgressBarIcon>

      <S.ProgressBarWrapper>
        {isZero ? (
          <S.ProgressBarFiller completed={10}>
            <S.ProgressBarLabel>{props.completed}%</S.ProgressBarLabel>
          </S.ProgressBarFiller>
        ) : (
          <S.ProgressBarFiller completed={props.completed}>
            <S.ProgressBarLabel>{props.completed}%</S.ProgressBarLabel>
          </S.ProgressBarFiller>
        )}
      </S.ProgressBarWrapper>
    </S.ProgressBarContainer>
  );
};

export default QuizProgressBar;
