import React from "react";
import AddButtonProps from "./types";
import * as S from "./styles";
import { useHistory } from "react-router-dom";
import { RouteComponentProps, useParams } from "react-router-dom";

const AddButton = (props: AddButtonProps) => {
  interface QuizBookId {
    quizBookId: string;
  }
  const history = useHistory();

  const clickURL = () => {
    const { quizBookId } = useParams<QuizBookId>();
    history.push(`/quiz-book/${parseInt(quizBookId)}/makequiz`);
  };

  return (
    <S.AddButton>
      <S.AddButtonContainer to={props.link}>
        <S.ButtonText onClick={clickURL}>+</S.ButtonText>
      </S.AddButtonContainer>
    </S.AddButton>
  );
};

export default AddButton;
