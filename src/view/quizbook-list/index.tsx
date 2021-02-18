import React from "react";
import { Link } from "react-router-dom";
import { RouteComponentProps } from "react-router-dom";
import * as S from "./styles";

const QuizBookListPage = ({ history, match }: RouteComponentProps) => {
  const categoryId = match.params["categoryId"];
  if (!parseInt(categoryId)) throw new Error("잘못된 URL");

  return (
    <>
      <h1>퀴즈북 페이지</h1>
      {/* 문제집 링크 임시 구현 - 삭제 예정*/}
      <S.QuizBookContainer>
        <S.QuizBookButton to={`/quiz-book/2/quiz`}>문제집 2</S.QuizBookButton>
        <S.QuizBookButton to={`/quiz-book/4/quiz`}>문제집 4</S.QuizBookButton>
        <S.QuizBookButton to={`/quiz-book/5/quiz`}>문제집 5</S.QuizBookButton>
      </S.QuizBookContainer>
    </>
  );
};

export default QuizBookListPage;
