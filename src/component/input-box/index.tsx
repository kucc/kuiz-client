import React from "react";
import InputProps from "./types";
import * as S from "./styles";

const InputBox = (props: InputProps) => {
  const { placeholder, setData } = props;

  return (
    <S.InputBox
      placeholder={placeholder}
      onChange={(e) => {
        setData(e.target.value);
      }}
    />
  );
};

export default InputBox;
