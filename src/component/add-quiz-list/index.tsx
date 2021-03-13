import React, { ReactElement } from "react";
import * as S from "./styles";
import AddButton from "@component/buttons/add-button/index";
import QuizModel from "@common/model/quiz";
import QuizQuestion from "../quiz-question";

export interface QuizProps {
  quizBookId: number;
  quizList: QuizModel[];
}

const AddQuizList = ({ quizBookId, quizList }: QuizProps): ReactElement => {
  return (
    <S.Wrapper>
      <S.Container>
        <AddButton link={`/quiz-book/${quizBookId}/makequiz`} />
      </S.Container>
      <S.Container>
        {quizList &&
          quizList.map((quiz) => {
            return (
              <S.QuizQuestionContainer key={quiz.id}>
                <S.Title>문제</S.Title>
                <QuizQuestion question={quiz.question} />
              </S.QuizQuestionContainer>
            );
          })}
      </S.Container>
    </S.Wrapper>
  );
};

export default AddQuizList;
