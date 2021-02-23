import React from "react";
import DropDownProps from "./types";
import * as S from "./styles";

const DropDown = (props: DropDownProps) => {
  return (
    <S.DropDown {...props}>
      <S.DropDownOptionContainer>
        <S.DropDownOption>최신순</S.DropDownOption>
        <S.DropDownOption>인기순</S.DropDownOption>
      </S.DropDownOptionContainer>
    </S.DropDown>
  );
};

export default DropDown;
