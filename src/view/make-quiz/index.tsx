import React from "react";
import MakeQuizContainer from "@container/make-quiz-container/index";
import { RouteComponentProps } from "react-router-dom";
import QuizInputContainer from "@/container/quiz-input-container";

const MakeQuizPage = (props: RouteComponentProps<{quizId, quizBookId}>) => {
  const quizBookId = props.match.params["quizbookId"];
  if (!parseInt(quizBookId)) throw new Error("잘못된 URL");

  return <QuizInputContainer {...props} quizId={null} quizBookId={quizBookId} />;
};

export default MakeQuizPage;
