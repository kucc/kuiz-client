import React from "react";
import { QuizBookProps } from "./types";
import * as S from "./styles";

const QuizBook = ({ quizBook }: QuizBookProps) => {
  return (
    <S.QuizBookWrapper to={`/quiz-book/${quizBook.id}/quiz`}>
      <S.QuizBookRow height={4}>
        <S.QuizBookName>
          <S.QuizBoldText>{quizBook.title}</S.QuizBoldText>
        </S.QuizBookName>
        <S.QuizBookLike>
          <S.QuizText bold>👍 {quizBook.likeCount}</S.QuizText>
        </S.QuizBookLike>
      </S.QuizBookRow>
      <S.QuizBookRow height={3}>
        <S.QuizCount>
          <S.QuizText bold>Q {quizBook.quizCount}</S.QuizText>
        </S.QuizCount>
        <S.SolvedCount>
          <S.QuizText bold={false}>{quizBook.solvedCount} solve</S.QuizText>
        </S.SolvedCount>
        <S.QuizBookOwner>
          <S.QuizText bold={false}>{quizBook.ownerName}</S.QuizText>
        </S.QuizBookOwner>
      </S.QuizBookRow>
    </S.QuizBookWrapper>
  );
};

export default QuizBook;
