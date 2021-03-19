import React, { ReactElement } from "react";
import AddButtonProps from "./types";
import * as S from "./styles";

const AddButton = (props: AddButtonProps): ReactElement => {
  return (
    <S.AddButton>
      <S.AddButtonContainer to={props.link}>
        <S.ButtonText>+</S.ButtonText>
      </S.AddButtonContainer>
    </S.AddButton>
  );
};

export default AddButton;
