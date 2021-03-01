import React from "react";
import QuizInputContainer from "@/container/quiz-input-container";
import { useParams } from "react-router-dom";

interface QuizId {
  quizId: string;
}

const EditQuizPage = () => {
  const { quizId } = useParams<QuizId>();
  if (!parseInt(quizId)) throw new Error("잘못된 URL");

  return <QuizInputContainer quizId={parseInt(quizId)} quizBookId={null} />;
};
export default EditQuizPage;
