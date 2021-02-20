import React, { useEffect, useState } from "react";
import { STATIC_URL } from "@asset/constant";
import * as S from "./styles";
import { QuizProgressBarProps } from "./types";

const QuizProgressBar = (props: QuizProgressBarProps) => {
  return (
    <S.ProgressBarContainer>
      <S.ProgressBarIcon>
        <S.ProgressBarMan src={STATIC_URL.RUNNING_MAN}></S.ProgressBarMan>
        <S.ProgressBarFlag src={STATIC_URL.FLAG}></S.ProgressBarFlag>
      </S.ProgressBarIcon>

      <S.ProgressBarWrapper>
        <S.ProgressBarFiller completed={props.completed}>
          <S.ProgressBarLabel>{props.completed}%</S.ProgressBarLabel>
        </S.ProgressBarFiller>
      </S.ProgressBarWrapper>
    </S.ProgressBarContainer>
  );
};

export default QuizProgressBar;
