import React, { ReactElement } from "react";
import * as S from "./styles";
import AddButton from "@component/buttons/add-button/index";
import QuizModel from "@common/model/quiz";
import QuizBox from "../quiz-box";

export interface QuizProps {
  quizBookId: number;
  quizList: QuizModel[];
}

const AddQuizList = ({ quizBookId, quizList }: QuizProps): ReactElement => {
  return (
    <>
      <S.Container>
        <AddButton link={`/quiz-book/${quizBookId}/makequiz`} />
      </S.Container>

      <S.Container>
        {quizList &&
          quizList.map((quiz) => {
            return <QuizBox key={quiz.id} quiz={quiz} />;
          })}
      </S.Container>
    </>
  );
};

export default AddQuizList;
