import React, { useCallback, useState } from "react";
import * as S from "./styles";
import { ProgressPlugin } from "webpack";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import QuizCategorySelect from "../../component/option";
import InputBox from "@component/input-box/index";
import CheckBox from "@component/checkbox/index";
import AddButton from "@component/buttons/add-button/index";
import { QuizBookProps } from "@component/quizbook/types";
import { RouteComponentProps, useParams } from "react-router-dom";
import QuizContainer from "@/container/quiz-container/index";
interface QuizBookId {
  quizBookId: string;
}

const AddQuizList = () => {
  const { quizBookId } = useParams<QuizBookId>();

  return (
    <S.Wrapper>
      <S.Container>
        <AddButton link={`/quiz-book/${parseInt(quizBookId)}/makequiz`} />
      </S.Container>
    </S.Wrapper>
  );
};

export default AddQuizList;
