import React from "react";
import MakeQuizContainer from "@container/make-quiz-container/index";
import { RouteComponentProps } from "react-router-dom";

const MakeQuizPage = (props: RouteComponentProps<{ quizbookId: string }>) => {
  return <MakeQuizContainer {...props} />;
};

export default MakeQuizPage;
