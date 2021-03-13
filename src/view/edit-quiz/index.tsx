import React, { ReactElement, useEffect, useState } from "react";
import QuizInputContainer from "@/container/quiz-input-container";
import { useHistory, useParams } from "react-router-dom";
import QuizModel from "@/common/model/quiz";
import quizAPI from "@/common/lib/api/quiz";
import CustomAlert from "@/component/custom-alert";
import { useDispatch } from "react-redux";
import { showAlertModal } from "@/modules/modal";

interface QuizId {
  quizId: string;
}

const EditQuizPage = (): ReactElement => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { quizId } = useParams<QuizId>();
  const [data, setData] = useState<QuizModel>();
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (!parseInt(quizId)) history.push("/");

    const getQuiz = async () => {
      const quiz = await quizAPI.getQuiz(parseInt(quizId)).catch(() => {
        setError(true);
      });
      if (quiz) setData(quiz);
    };
    getQuiz();
  }, []);

  useEffect(() => {
    dispatch(showAlertModal("해당 문제집의 수정 및 삭제 권한이 없습니다."));
  }, [error]);

  return (
    <>
      {error ? (
        <CustomAlert redirect={"/"} />
      ) : (
        <QuizInputContainer
          data={data as QuizModel}
          quizId={parseInt(quizId)}
        />
      )}
    </>
  );
};
export default EditQuizPage;
