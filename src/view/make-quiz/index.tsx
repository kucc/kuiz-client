import React from "react";
import { useParams } from "react-router-dom";
import QuizInputContainer from "@/container/quiz-input-container";

interface QuizBookId {
  quizBookId: string;
}

const MakeQuizPage = () => {
  const { quizBookId } = useParams<QuizBookId>();
  if (!parseInt(quizBookId)) throw new Error("잘못된 URL");

  return <QuizInputContainer quizId={null} quizBookId={parseInt(quizBookId)} />;
};

export default MakeQuizPage;
