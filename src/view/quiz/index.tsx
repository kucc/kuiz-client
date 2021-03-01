import React from "react";
import QuizContainer from "@container/quiz-container/index";
import { RouteComponentProps, useParams } from "react-router-dom";

interface QuizBookId {
  quizBookId: string;
}

const QuizPage = () => {
  const { quizBookId } = useParams<QuizBookId>();
  return <QuizContainer quizBookId={parseInt(quizBookId)} />;
};

export default QuizPage;
