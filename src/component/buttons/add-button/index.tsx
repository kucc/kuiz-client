import React from "react";
import AddButtonProps from "./types";
import * as S from "./styles";
import { useHistory } from "react-router-dom";
import { RouteComponentProps, useParams } from "react-router-dom";

const AddButton = (props: AddButtonProps) => {
  return (
    <S.AddButton>
      <S.AddButtonContainer to={props.link}>
        <S.ButtonText>+</S.ButtonText>
      </S.AddButtonContainer>
    </S.AddButton>
  );
};

export default AddButton;
