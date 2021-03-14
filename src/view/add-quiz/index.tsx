import React, { ReactElement, useEffect } from "react";
import * as S from "./styles";
import AddQuizList from "@component/add-quiz-list/index";
import { useHistory, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getQuizListAsync } from "@/modules/quiz";
import { RootState } from "@/modules";
import QuizModel from "@/common/model/quiz";

interface QuizBookId {
  quizBookId: string;
}
const AddQuizPage = (): ReactElement => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { quizBookId } = useParams<QuizBookId>();
  const { data } = useSelector((state: RootState) => state.quiz);

  useEffect(() => {
    if (!parseInt(quizBookId)) history.push("/");
    dispatch(getQuizListAsync.request({ quizBookId: parseInt(quizBookId) }));
  }, []);

  return (
    <S.Wrapper>
      <S.Container>
        <S.TitleContainer>
          <S.Title>문제</S.Title>
        </S.TitleContainer>

        <AddQuizList
          quizList={data as QuizModel[]}
          quizBookId={parseInt(quizBookId)}
        />

        <S.ButtonContainer>
          <S.SaveButton>임시저장</S.SaveButton>
          <S.SubmitButton>제출</S.SubmitButton>
        </S.ButtonContainer>
      </S.Container>
    </S.Wrapper>
  );
};

export default AddQuizPage;
