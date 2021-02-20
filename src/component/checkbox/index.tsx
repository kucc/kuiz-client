import React, { useCallback, useState } from "react";
import * as S from "./styles";

const CheckBox = () => {
  const [checked, setChecked] = useState(true);
  return (
    <S.CheckBox
      type="checkbox"
      defaultChecked={false}
      onChange={() => setChecked(!checked)}
    />
  );
};

export default CheckBox;
