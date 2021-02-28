import React from "react";
import * as S from "./styles";
import { QuizInputOptionProps } from "./types";

const QuizInputOption = ({
  quiz,
  index,
  handleInput,
}: QuizInputOptionProps) => {
  const key = `option${index}`;

  return (
    <S.InputContainer>
      <S.MultipleChoiceInputBox
        key={index}
        placeholder="입력해 주세요."
        name={key}
        onChange={(event) => handleInput(event)}
        defaultValue={quiz ? quiz[key] : ""}
      />

      <S.CheckBox
        type="radio"
        name="answer"
        value={index}
        defaultChecked={quiz?.answer === index || undefined}
        onChange={(event) => handleInput(event)}
      />
    </S.InputContainer>
  );
};

export default QuizInputOption;
