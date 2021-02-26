import React from "react";
import DropDownProps from "./types";
import * as S from "./styles";

const DropDown = (props: DropDownProps) => {
  const { onClick1, onClick2, text1, text2 } = props;
  return (
    <S.DropDown {...props}>
      <S.DropDownOptionContainer>
        <S.DropDownOption onClick={onClick1}>{text1}</S.DropDownOption>
        <S.DropDownOption onClick={onClick2}>{text2}</S.DropDownOption>
      </S.DropDownOptionContainer>
    </S.DropDown>
  );
};

export default DropDown;
