import React, { ReactElement, useRef } from "react";
import { QuizProps } from "./types";
import * as S from "./styles";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteQuizAsync } from "@/modules/quiz";

const QuizBox = ({ quiz }: QuizProps): ReactElement => {
  const deleteButton = useRef<HTMLImageElement>(null);

  const history = useHistory();
  const dispatch = useDispatch();

  const editQuiz = (e) => {
    if (e.target === deleteButton.current) {
      return;
    }
    history.push(`/quiz/${quiz.id}`);
  };

  const deleteQuiz = () => {
    const isDelete = confirm(
      "삭제 후 다시 복구할 수 없습니다. 정말 삭제하시겠어요?"
    );
    if (!isDelete) return;

    dispatch(deleteQuizAsync.request({ quizId: quiz.id }));
  };

  return (
    <S.QuizWrapper onClick={(e) => editQuiz(e)}>
      <S.QuizColumn width={15}>
        <S.QuizOption>{quiz.isChoice ? "객관식" : "주관식"}</S.QuizOption>
      </S.QuizColumn>
      <S.QuizColumn width={70}>
        <S.QuizQuestion>Q. {quiz.question}</S.QuizQuestion>
      </S.QuizColumn>
      <S.QuizColumn width={15}>
        <S.QuizDeleteButton
          src={"/src/asset/delete.png"}
          onClick={deleteQuiz}
          ref={deleteButton}
        />
      </S.QuizColumn>
    </S.QuizWrapper>
  );
};

export default QuizBox;
