import React, { useCallback, useState } from "react";
import InputProps from "./types";
import * as S from "./styles";

const InputBox = (props: InputProps) => {
  const [quiz, setQuiz] = useState("");
  return (
    <S.InputBox
      placeholder={props.placeholder}
      onChange={(e) => {
        setQuiz(e.target.value);
      }}
    />
  );
};

export default InputBox;
