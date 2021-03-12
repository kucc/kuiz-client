import React from "react";

export interface UpdateNicknameInputProps {
  defaultName: string;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyUP: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}
