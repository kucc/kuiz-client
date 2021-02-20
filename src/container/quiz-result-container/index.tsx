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
    <div>
      전체 문제 : {totalQuizCount}, 맞힌 문제 : {correctQuizCount}
    </div>
  );
};

export default QuizResultContainer;
