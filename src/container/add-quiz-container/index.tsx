import React, { ReactElement } from "react";
import * as S from "./styles";
import AddButton from "@component/buttons/add-button/index";
import QuizModel from "@common/model/quiz";
import QuizBox from "../../component/quiz-box";

export interface QuizProps {
  quizBookId: number;
  quizList: QuizModel[];
}

const AddQuizContainer = ({
  quizBookId,
  quizList,
}: QuizProps): ReactElement => {
  return (
    <S.Wrapper>
      <AddButton link={`/quiz-book/${quizBookId}/makequiz`} />

      <S.QuizContainer>
        {quizList &&
          quizList.map((quiz, index) => {
            return (
              <QuizBox key={`quiz${quiz.id}`} quiz={quiz} index={index + 1} />
            );
          })}
      </S.QuizContainer>
    </S.Wrapper>
  );
};

export default AddQuizContainer;
