import React from "react";
import NextButtonProps from "./types";
import * as S from "./styles";

const NextButton = (props: NextButtonProps) => {
  return (
    <S.NextButton>
      <S.NextButtonContainer to={props.link}>
        <S.ButtonText>{props.text}</S.ButtonText>
      </S.NextButtonContainer>
    </S.NextButton>
  );
};

export default NextButton;
