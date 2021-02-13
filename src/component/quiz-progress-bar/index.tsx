import React, { useEffect, useState } from "react";
import { STATIC_URL } from "@asset/constant";
import * as S from "./styles";

const QuizProgressBar = () => {
  return (
    <S.ProgressBarContainer>
      <S.ProgressBarIcon>
        <S.ProgressBarMan src={STATIC_URL.RUNNING_MAN}></S.ProgressBarMan>
        <S.ProgressBarFlag src={STATIC_URL.FLAG}></S.ProgressBarFlag>
      </S.ProgressBarIcon>

      <S.ProgressBarWrapper>
        <S.ProgressBarFiller>
          <S.ProgressBarLabel>20%</S.ProgressBarLabel>
        </S.ProgressBarFiller>
      </S.ProgressBarWrapper>
    </S.ProgressBarContainer>
  );
};

export default QuizProgressBar;
