import React, { useCallback, useState } from "react";
import { STATIC_URL } from "@/asset/constant";
import Logo from "@component/logo";
import * as S from "./styles";
import AddButton from "@component/buttons/next-button/index";
import QuizCategorySelect from "../../component/option";
import InputBox from "@component/input-box/index";
import CheckBox from "@component/checkbox/index";
import AddQuizList from "@component/add-quiz-list";
import { RouteComponentProps, useParams } from "react-router-dom";

const AddQuizPage = () => {
  interface QuizBookId {
    quizBookId: string;
  }

  const { quizBookId } = useParams<QuizBookId>();

  return (
    <S.Wrapper>
      <S.Container>
        <S.TitleContainer>
          <S.Title>문제</S.Title>
        </S.TitleContainer>

        <AddQuizList quizBookid={parseInt(quizBookId)} />
        <S.ButtonContainer>
          <S.SaveButton>임시저장</S.SaveButton>
          <S.SubmitButton>제출</S.SubmitButton>
        </S.ButtonContainer>
      </S.Container>
    </S.Wrapper>
  );
};

export default AddQuizPage;
