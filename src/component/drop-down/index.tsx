import React, { Ref } from "react";
import DropDownProps from "./types";
import * as S from "./styles";

const DropDown = React.forwardRef(
  (props: DropDownProps, ref: Ref<HTMLDivElement>) => {
    const { clickEvent1, clickEvent2, text1, text2 } = props;

    return (
      <S.DropDown {...props}>
        <S.DropDownOptionContainer ref={ref}>
          <S.DropDownOption onClick={clickEvent1}>{text1}</S.DropDownOption>
          <S.DropDownOption onClick={clickEvent2}>{text2}</S.DropDownOption>
        </S.DropDownOptionContainer>
      </S.DropDown>
    );
  }
);

DropDown.displayName = "DropDown";

export default DropDown;
