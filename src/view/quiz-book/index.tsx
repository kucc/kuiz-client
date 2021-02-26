import React, { useCallback, useState } from "react";
import { STATIC_URL } from "@/asset/constant";
import Logo from "@component/logo";
import * as S from "./styles";
import NextButton from "@component/buttons/next-button/index";
import QuizCategorySelect from "../../component/option";
import InputBox from "@component/input-box/index";
import CheckBox from "@component/checkbox/index";
const QuizBookPage = () => {
  const [title, setTitle] = useState("");
  return (
    <S.Wrapper>
      <S.Container>
        <Logo />
        <S.Warning>
          타인을 비방하거나 타인의 사진을 무단으로 도용해 문제 제작에 사용하지
          말아주세요!
        </S.Warning>
        <S.AgreementContainer>
          <S.Agree>동의합니다</S.Agree>
          <CheckBox />
        </S.AgreementContainer>
        <S.CategoryContainer>
          <S.SubTitle>카테고리</S.SubTitle>
          <QuizCategorySelect />
        </S.CategoryContainer>
        <S.NameContainer>
          <S.SubTitle>문제집 이름</S.SubTitle>
          <InputBox placeholder="문제집 이름을 입력해주세요" setData={setTitle}/>
        </S.NameContainer>

        <S.ButtonContainer>
          <NextButton color="white" link={"/addquiz"} text="다음으로" />
        </S.ButtonContainer>
      </S.Container>
    </S.Wrapper>
  );
};
export default QuizBookPage;
