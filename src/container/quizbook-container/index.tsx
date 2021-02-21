import QuizBookModel from "@/common/model/quiz-book";
import CommonButton from "@/component/buttons/common-button";
import InputBox from "@/component/input-box";
import QuizBook from "@/component/quizbook";
import { RootState } from "@/modules";
import { getQuizBookListAsync } from "@/modules/quiz-book";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as S from "./styles";
import { QuizBookContainerProps } from "./types";

const QuizBookContainer = ({ categoryId }: QuizBookContainerProps) => {
  const { data, loading, error } = useSelector(
    (state: RootState) => state.quizbook
  );

  const dispatch = useDispatch();

  const getQuizBookList = () => {
    dispatch(getQuizBookListAsync.request({ categoryId, page: 1 }));
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
      <S.FilterColumn align={"flex-end"}>
        <S.Filter>최신순 ▽</S.Filter>
      </S.FilterColumn>
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
