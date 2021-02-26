import QuizBookModel from "@/common/model/quiz-book";
import CommonButton from "@/component/buttons/common-button";
import InputBox from "@/component/input-box";
import QuizBook from "@/component/quizbook";
import DropDown from "@/component/drop-down";
import DropDownProps from "@/component/drop-down/types";
import { RootState } from "@/modules";
import { getQuizBookListAsync } from "@/modules/quiz-book";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as S from "./styles";
import { QuizBookContainerProps } from "./types";

const QuizBookContainer = (
  { categoryId }: QuizBookContainerProps,
  props: DropDownProps
) => {
  const { data, loading, error } = useSelector(
    (state: RootState) => state.quizbook
  );

  const dispatch = useDispatch();

  const getQuizBookList = () => {
    dispatch(
      getQuizBookListAsync.request({ categoryId, page: 1, isSortByDate: true })
    );
  };

  const getQuizBookListByLikes = () => {
    dispatch(
      getQuizBookListAsync.request({ categoryId, page: 1, isSortByDate: false })
    );
  };

  const [show, setShow] = useState(false);
  const toggleDropDown = () => {
    setShow(!show);
  };

  useEffect(() => {
    getQuizBookList();
  }, [dispatch]);

  return (
    <S.QuizBookContainer>
      <S.SearchColumn>
        <InputBox placeholder={"문제집 검색"} />
        <S.CommonButtonWrapper>
          <CommonButton
            onClick={() => {
              console.log("실행");
            }}
            text={"검색"}
          />
        </S.CommonButtonWrapper>
      </S.SearchColumn>
      <S.FilterColumn align={"flex-start"}>
        <S.ButtonFilter>
          <S.FilterText>안푼 문제집</S.FilterText>
        </S.ButtonFilter>
      </S.FilterColumn>
      <S.DropDownFilterContainer>
        <S.FilterColumn align={"flex-end"}>
          <S.Filter onClick={toggleDropDown}>최신순 ▽</S.Filter>
        </S.FilterColumn>
        <DropDown
          show={show}
          text1={"최신순"}
          text2={"인기순"}
          onClick1={getQuizBookList}
          onClick2={getQuizBookListByLikes}
        />
      </S.DropDownFilterContainer>

      {data ? (
        data.map((quizBook) => {
          return (
            <QuizBook key={`quiz${quizBook.id}`} quizBook={quizBook}></QuizBook>
          );
        })
      ) : (
        <></>
      )}
    </S.QuizBookContainer>
  );
};

export default QuizBookContainer;
