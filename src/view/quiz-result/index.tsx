import React from "react";
import QuizResultContainer from "@container/quiz-result-container/index";
import { RouteComponentProps } from "react-router-dom";
import { StaticContext } from "react-router";
import { LocationState } from "@container/quiz-result-container";

const QuizResultPage = (
  props: RouteComponentProps<{}, StaticContext, LocationState>
) => {
  return <QuizResultContainer {...props} />;
};

export default QuizResultPage;
