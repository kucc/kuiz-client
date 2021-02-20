import { SolvedCount } from "@/component/quizbook/styles";
import React from "react";
import { CommonButtonProps } from "./types";
import * as S from "./styles";

const CommonButton = ({ onClick, text }: CommonButtonProps) => {
  return (
    <S.StyledCommonButton onClick={onClick}>
      <S.ButtonText>{text}</S.ButtonText>
    </S.StyledCommonButton>
  );
};

export default CommonButton;
