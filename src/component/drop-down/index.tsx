import React from "react";
import DropDownProps from "./types";
import * as S from "./styles";

const DropDown = (props: DropDownProps) => {
  const { clickEvent1, clickEvent2, text1, text2 } = props;
  return (
    <S.DropDown {...props}>
      <S.DropDownOptionContainer>
        <S.DropDownOption onClick={clickEvent1}>{text1}</S.DropDownOption>
        <S.DropDownOption onClick={clickEvent2}>{text2}</S.DropDownOption>
      </S.DropDownOptionContainer>
    </S.DropDown>
  );
};

export default DropDown;
