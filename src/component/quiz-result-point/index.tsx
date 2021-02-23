import React from "react";
import * as S from "./styles";
import { QuizPointProps } from "./types";
import { STATIC_URL } from "@asset/constant";

const QuizPoint = (props: QuizPointProps) => {
  const { correctQuizCount } = props;
  const point = correctQuizCount * 30;

  return (
    <S.PointContainer>
      <S.PointImg src={STATIC_URL.Coin} />
      <S.Point>{point} 포인트 획득 !</S.Point>
    </S.PointContainer>
  );
};

export default QuizPoint;
