import React, { useEffect, useRef } from "react";
import { UpdateNicknameInputProps } from "./types";
import * as S from "./styles";

const UpdateNicknameInput = ({
  defaultName,
  onChangeHandler,
  onKeyUP,
}: UpdateNicknameInputProps) => {
  const inputComponent = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputComponent.current) inputComponent.current.focus();
  }, []);

  return (
    <>
      <S.UpdateNicknameInput
        defaultValue={defaultName}
        onChange={onChangeHandler}
        ref={inputComponent}
        onKeyDown={onKeyUP}
      />
    </>
  );
};

export default UpdateNicknameInput;
