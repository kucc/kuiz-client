import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import QuizInputContainer from "@/container/quiz-input-container";

const EditQuizPage = ({ match }: RouteComponentProps) => {
  const quizId = match.params["quizId"];
  if (!parseInt(quizId)) throw new Error("잘못된 URL");

  return <QuizInputContainer quizId={quizId} quizBookId={null} />;
};
export default EditQuizPage;
