import React, { useCallback, useState } from "react";
import * as S from "./styles";
import { ProgressPlugin } from "webpack";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import AddButton from "@component/buttons/add-button/index";
import { QuizBookProps } from "@component/quizbook/types";
import { RouteComponentProps, useParams } from "react-router-dom";
import QuizQuestion from "@/component/quiz-question/index";
import { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/modules";
import quizAPI from "@/common/lib/api/quiz";
import QuizModel from "@common/model/quiz";
import { defaultQuizRequest } from "@container/quiz-input-container/hooks";
export interface QuizProps {
  quizBookid: number;
}
interface QuizBookId {
  quizBookId: string;
}

const AddQuizList = ({ quizBookid }: QuizProps) => {
  const history = useHistory();

  const { quizBookId } = useParams<QuizBookId>();
  const [Quiz, setQuiz] = useState({} as QuizModel);

  const dispatch = useDispatch();

  const getQuizList = async () => {
    const quizList = await quizAPI.getAllQuiz(quizBookid);

    setQuiz(quizList[0]);
  };

  useEffect(() => {
    getQuizList();
  }, []);

  return (
    <S.Wrapper>
      <S.Container>
        <AddButton link={`/quiz-book/${parseInt(quizBookId)}/makequiz`} />
      </S.Container>
      <S.Container>
        <S.QuizQuestionContainer>
          <S.Title>문제</S.Title>
          <QuizQuestion question={Quiz.question} />
        </S.QuizQuestionContainer>
      </S.Container>
    </S.Wrapper>
  );
};

export default AddQuizList;
