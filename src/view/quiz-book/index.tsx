import React, { SelectHTMLAttributes, useEffect, useState } from "react";
import Logo from "@component/logo";
import * as S from "./styles";
import NextButton from "@component/buttons/next-button/index";
import QuizCategorySelect from "@component/option";
import InputBox from "@component/input-box/index";
import CheckBox from "@component/checkbox/index";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryAsync } from "@/modules/category";
import { RootState } from "@/modules";
import quizbookAPI from "@/common/lib/api/quizbook";
import { useHistory } from "react-router-dom";

const QuizBookPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { data } = useSelector((state: RootState) => state.category);
  const [isAgreed, setIsAgreed] = useState(false);
  const [category, setCategory] = useState<number>(data ? data[0].id : 1);
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (data) return;
    dispatch(getCategoryAsync.request());
  }, []);

  const checkboxHandler = () => {
    setIsAgreed(!isAgreed);
  };

  const selectCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.currentTarget) {
      setCategory(Number(e.currentTarget.value));
    }
  };

  const nextButtonHandler = async () => {
    if (!isAgreed) {
      alert("동의해주세요");
      return;
    }
    const newQuizBook = await quizbookAPI.postNewQuizBook(title, category);
    if (!newQuizBook) {
      alert("서버 에러.. 퀴즈북 생성 실패... 죄송합니다.");
      return;
    }
    history.push(`/quiz-book/${newQuizBook.id}`);
  };

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
          <CheckBox onChange={checkboxHandler} />
        </S.AgreementContainer>
        <S.CategoryContainer>
          <S.SubTitle>카테고리</S.SubTitle>
          {data && (
            <QuizCategorySelect onChange={selectCategory} options={data} />
          )}
        </S.CategoryContainer>
        <S.NameContainer>
          <S.SubTitle>문제집 이름</S.SubTitle>
          <InputBox
            placeholder="문제집 이름을 입력해주세요"
            setData={setTitle}
          />
        </S.NameContainer>

        <S.ButtonContainer>
          <NextButton
            color="white"
            text="다음으로"
            onClickHandler={nextButtonHandler}
          />
        </S.ButtonContainer>
      </S.Container>
    </S.Wrapper>
  );
};
export default QuizBookPage;
