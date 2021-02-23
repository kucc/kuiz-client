import React, { useCallback, useState } from "react";
import * as S from "./styles";
import AddButton from "../buttons/add-button/index";
const AddQuizList = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <AddButton link={"/quiz-book/1/makequiz"} />
      </S.Container>
    </S.Wrapper>
  );
};

export default AddQuizList;
