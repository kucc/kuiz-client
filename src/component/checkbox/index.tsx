import React from "react";
import * as S from "./styles";
import { CheckboxProps } from "./types";

const CheckBox = ({ onChange }: CheckboxProps) => {
  return (
    <S.CheckBox type="checkbox" defaultChecked={false} onChange={onChange} />
  );
};

export default CheckBox;
