import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { useLocation } from "react-router";
import QuizScore from "@component/quiz-result-score";

export type LocationState = {
  totalQuizCount: number;
  correctQuizCount: number;
};

const QuizResultContainer: React.FC = () => {
  const location = useLocation<LocationState>();
  const { totalQuizCount, correctQuizCount } = location.state;
  const [percentage, setPercentage] = useState(0);
  const [progressBar, setProgressBar] = useState(0);
  const correctRate = (correctQuizCount / totalQuizCount) * 100;

  const updatePercentage = () => {
    setTimeout(() => {
      setProgressBar(progressBar + 1);
    }, 5);
  };

  useEffect(() => {
    setPercentage(Math.round(correctRate));
    if (percentage > 0) updatePercentage();
  }, [percentage]);

  useEffect(() => {
    if (progressBar < percentage) updatePercentage();
  }, [progressBar]);

  return (
    <>
      <S.QuizResultContainer>
        <S.QuizResultWrapper>
          <QuizScore
            percentage={progressBar}
            correctQuizCount={correctQuizCount}
            totalQuizCount={totalQuizCount}
          />
          <h1> 당신은 퀴즈왕 !</h1>
          <S.MainPageButton to={"/"}>메인 화면으로</S.MainPageButton>
        </S.QuizResultWrapper>
      </S.QuizResultContainer>
      <div>포인트는 해당 문제의 첫 시도에 대해서만 획득가능합니다.</div>
    </>
  );
};

export default QuizResultContainer;
