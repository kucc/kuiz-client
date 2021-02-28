import React, { useCallback, useState } from "react";
import InputProps from "./types";
import * as S from "./styles";

const RadioButton = (props: InputProps) => {
  const {
      num,
      answer,
      setAnswer
  } = props;

  return (
    <S.RadioButton
      type="radio"
      value={num}
      checked={answer === num}
      onChange={(e) => setAnswer(e.target.value)}
    />
  );
};

export default RadioButton;
