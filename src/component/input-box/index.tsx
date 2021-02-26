import React, { useCallback, useState } from "react";
import InputProps from "./types";
import * as S from "./styles";

const InputBox = (props: InputProps) => {
  return <S.InputBox placeholder={props.placeholder} />;
};

export default InputBox;
