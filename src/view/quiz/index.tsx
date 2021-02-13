import React from "react";
import Layout from "@component/common/layout/index";
import QuizContainer from "@container/quiz-container/index";
import { RouteComponentProps } from "react-router-dom";

const QuizPage = (props: RouteComponentProps<{}>) => {
  return <QuizContainer {...props} />;
};

export default QuizPage;
