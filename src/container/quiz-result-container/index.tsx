import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { useLocation } from "react-router";
import QuizScore from "@component/quiz-result-score";
import QuizPoint from "@component/quiz-result-point";

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
    <S.QuizResultContainer>
      <S.QuizResultWrapper>
        <QuizScore
          percentage={progressBar}
          correctQuizCount={correctQuizCount}
          totalQuizCount={totalQuizCount}
        />
        <QuizPoint correctQuizCount={correctQuizCount} />
        <S.MainPageButton to={"/"}>메인 화면으로</S.MainPageButton>
      </S.QuizResultWrapper>
    </S.QuizResultContainer>
  );
};

export default QuizResultContainer;
