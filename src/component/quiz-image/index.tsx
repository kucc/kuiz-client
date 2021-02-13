import React from "react";
import { QuizImageProps } from "./types";
import * as S from "./styles";

const QuizImage = (props: QuizImageProps) => {
  return (
    <S.ImageContainer>
      <S.QuizImage src={props.imageURL}></S.QuizImage>
    </S.ImageContainer>
  );
};

export default QuizImage;
