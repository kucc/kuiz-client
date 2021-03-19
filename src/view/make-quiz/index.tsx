import React, { ReactElement, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import QuizInputContainer from "@/container/quiz-input-container";

interface QuizBookId {
  quizBookId: string;
}

const MakeQuizPage = (): ReactElement => {
  const history = useHistory();
  const { quizBookId } = useParams<QuizBookId>();

  useEffect(() => {
    if (!parseInt(quizBookId)) history.push("/");
  }, []);

  return <QuizInputContainer quizBookId={parseInt(quizBookId)} />;
};

export default MakeQuizPage;
