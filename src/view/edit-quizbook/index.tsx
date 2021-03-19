import React, { ReactElement, useEffect, useMemo } from "react";
import * as S from "./styles";
import { useHistory, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/modules";
import { showAlertModal } from "@/modules/modal";
import CustomAlert from "@/component/custom-alert";
import {
  getQuizBookwithQuizAsync,
  initQuizBookReducer,
} from "@/modules/quiz-book";
import { getCategoryAsync } from "@/modules/category";
import EditQuizBookContainer from "@/container/edit-quizbook-container";

interface QuizBookId {
  quizBookId: string;
}

const EditQuizBookPage = (): ReactElement => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { quizBookId } = useParams<QuizBookId>();
  const quizBookIdNumber = useMemo(() => parseInt(quizBookId), [quizBookId]);

  const { data: quizBook, error } = useSelector(
    (state: RootState) => state.quizBookwithQuiz
  );

  useEffect(() => {
    if (!quizBookIdNumber) history.push("/");
    dispatch(initQuizBookReducer());
    dispatch(getCategoryAsync.request());
    dispatch(
      getQuizBookwithQuizAsync.request({ quizBookId: quizBookIdNumber })
    );
  }, []);

  useEffect(() => {
    if (error) {
      dispatch(showAlertModal("해당 문제집의 수정 및 삭제 권한이 없습니다."));
    }
  }, [error]);

  return (
    <>
      {quizBook && (
        <S.Wrapper>
          <S.Container>
            <EditQuizBookContainer
              quizBookId={quizBookIdNumber}
              quizBook={quizBook}
            />
          </S.Container>
        </S.Wrapper>
      )}
      {error && <CustomAlert redirect="/" />}
    </>
  );
};

export default EditQuizBookPage;
