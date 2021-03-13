import React, { ReactElement, useEffect, useState } from "react";
import QuizInputContainer from "@/container/quiz-input-container";
import { useHistory, useParams } from "react-router-dom";
import QuizModel from "@/common/model/quiz";
import quizAPI from "@/common/lib/api/quiz";

interface QuizId {
  quizId: string;
}

const EditQuizPage = (): ReactElement => {
  const history = useHistory();
  const { quizId } = useParams<QuizId>();
  const [data, setData] = useState<QuizModel>();

  useEffect(() => {
    if (!parseInt(quizId)) history.push("/");

    const getQuiz = async () => {
      const quiz = await quizAPI.getQuiz(parseInt(quizId));
      setData(quiz);
    };
    getQuiz();
  }, []);

  return (
    <QuizInputContainer data={data as QuizModel} quizId={parseInt(quizId)} />
  );
};
export default EditQuizPage;
