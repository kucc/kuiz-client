import React, { useRef } from "react";
import { QuizBookProps } from "./types";
import * as S from "./styles";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postQuizBookLikstAsync } from "@/modules/quiz-book";

const QuizBook = ({ quizBook }: QuizBookProps) => {
  const likeButton = useRef<HTMLDivElement>(null);
  const history = useHistory();
  const dispatch = useDispatch();
  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target !== likeButton.current) {
      history.push(`/quiz-book/${quizBook.id}/quiz`);
    } else {
      dispatch(postQuizBookLikstAsync.request(quizBook.id));
    }
  };

  return (
    <S.QuizBookWrapper onClick={onClick}>
      <S.QuizBookRow height={4}>
        <S.QuizBookName>
          <S.QuizBoldText>{quizBook.title}</S.QuizBoldText>
        </S.QuizBookName>
        <S.QuizBookLike>
          <S.QuizText bold ref={likeButton}>
            👍 {quizBook.likedCount}
          </S.QuizText>
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
