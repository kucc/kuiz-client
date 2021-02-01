import React from "react";
import StartButtonProps from "./types";
import * as S from "./styles";

const StartButton = (props: StartButtonProps) => {
  return (
    <S.StartButton>
      <S.StartButtonContainer to={props.link}>
        <S.StartButtonColumn1>
          <S.ButtonIcon src={props.icon}></S.ButtonIcon>
        </S.StartButtonColumn1>
        <div></div>
        <S.StartButtonColumn2>
          <S.ButtonText>{props.text}</S.ButtonText>
        </S.StartButtonColumn2>
      </S.StartButtonContainer>
    </S.StartButton>
  );
};

export default StartButton;
