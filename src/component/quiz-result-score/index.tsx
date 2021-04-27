import React from "react";
import { QuizScoreProps } from "./types";
import * as S from "./styles";

const QuizScore = (props: QuizScoreProps) => {
  const { correctQuizCount, totalQuizCount, percentage } = props;

  return (
    <>
      <S.ScoreText>
        {totalQuizCount}문제 중 {correctQuizCount}문제를 <br />
        맞췄습니다 🎉
      </S.ScoreText>
      <S.ScoreContainer>
        <svg width="180" height="180" viewBox={"0 0 38 38"}>
          <S.DefaultCircle cx={19} cy={19} r={15.9154} />
          <S.ProgressCircle cx={19} cy={19} r={15.9154} {...props} />
          <S.CircleLabel>
            <S.Score x="50%" y="50%">
              {percentage} %
            </S.Score>
            <S.Text x="50%" y="50%">
              Correct
            </S.Text>
          </S.CircleLabel>
        </svg>
      </S.ScoreContainer>
    </>
  );
};

export default QuizScore;
