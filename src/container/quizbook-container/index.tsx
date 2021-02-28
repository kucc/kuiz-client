import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";

import CommonButton from "@/component/buttons/common-button";
import QuizBook from "@/component/quizbook";
import { RootState } from "@/modules";
import {
  getQuizBookListAsync,
  searchQuizBookListAsync,
} from "@/modules/quiz-book";
import * as S from "./styles";
import { QuizBookContainerProps } from "./types";

const QuizBookContainer = ({ categoryId }: QuizBookContainerProps) => {
  const [keyword, setKeyword] = useState("");
  const { data, loading, error } = useSelector(
    (state: RootState) => state.quizbook
  );

  const dispatch = useDispatch();

  const getQuizBookList = () => {
    dispatch(getQuizBookListAsync.request({ categoryId, page: 1 }));
  };

  const searchQuizBookList = (keyword: string) => {
    dispatch(searchQuizBookListAsync.request({ categoryId, keyword }));
  };

  useEffect(() => {
    getQuizBookList();
  }, [dispatch]);

  const delayedQueryCall = useRef(
    _.debounce((q) => searchQuizBookList(q), 1000)
  ).current;

  const onChangeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value);
    delayedQueryCall(e.currentTarget.value);
  };

  const onClickHandler = () => {
    searchQuizBookList(keyword);
  };

  return (
    <S.QuizBookContainer>
      <S.SearchColumn>
        <S.InputBox onChange={onChangeHandler} placeholder={"문제집검색"} />
        <S.CommonButtonWrapper>
          <CommonButton onClick={() => onClickHandler} text={"검색"} />
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
