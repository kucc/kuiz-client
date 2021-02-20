import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { RouteComponentProps } from "react-router-dom";
import LoadingSpinner from "@/component/common/loading-spinner";
import { StaticContext } from "react-router";

export type LocationState = {
  totalQuizCount: number;
  correctQuizCount: number;
};

const QuizResultContainer: React.FC<
  RouteComponentProps<{}, StaticContext, LocationState>
> = ({ location }) => {
  const { totalQuizCount, correctQuizCount } = location.state;
  const getQuizResult = () => {};

  useEffect(() => {
    getQuizResult();
  });

  return (
    <S.QuizResultContainer>
      <S.QuizResultWrapper>
        <S.QuizResultScore>
          {correctQuizCount} / {totalQuizCount}
        </S.QuizResultScore>
        <S.MainPageButton to={"/"}>메인 화면으로</S.MainPageButton>
      </S.QuizResultWrapper>
    </S.QuizResultContainer>
  );
};

export default QuizResultContainer;
