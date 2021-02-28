import React from "react";
import { RouteComponentProps } from "react-router-dom";
import QuizInputContainer from "@/container/quiz-input-container";

const MakeQuizPage = ({ match }: RouteComponentProps) => {
  const quizBookId = match.params["quizbookId"];
  if (!parseInt(quizBookId)) throw new Error("잘못된 URL");

  return <QuizInputContainer quizId={null} quizBookId={quizBookId} />;
};

export default MakeQuizPage;
