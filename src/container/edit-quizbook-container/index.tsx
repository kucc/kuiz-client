import React, { ReactElement, useState } from "react";
import * as S from "./styles";
import AddQuizContainer from "@/container/add-quiz-container/index";
import { QuizBookwithQuizModel } from "@/common/model/quiz-book";

interface EditQuizBookProps {
  quizBook: QuizBookwithQuizModel;
  quizBookId: number;
}

const EditQuizBookContainer = ({
  quizBook,
  quizBookId,
}: EditQuizBookProps): ReactElement => {
  return (
    <>
      <S.TitleContainer>
        <S.Title>문제</S.Title>
      </S.TitleContainer>

      <AddQuizContainer quizList={quizBook.quiz} quizBookId={quizBookId} />

      <S.ButtonContainer>
        <S.SaveButton>임시저장</S.SaveButton>
        <S.SubmitButton>제출</S.SubmitButton>
      </S.ButtonContainer>
    </>
  );
};

export default EditQuizBookContainer;
