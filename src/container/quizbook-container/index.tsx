import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CommonButton from "@/component/buttons/common-button";
import QuizBook from "@/component/quizbook";
import DropDown from "@/component/drop-down";
import { RootState } from "@/modules";
import {
  getQuizBookListAsync,
  getUnsolvedQuizBookListAsync,
  searchQuizBookListAsync,
} from "@/modules/quiz-book";
import * as S from "./styles";
import { QuizBookContainerProps } from "./types";
import debounce from "@common/lib/debounce";

const QuizBookContainer = ({ categoryId }: QuizBookContainerProps) => {
  const dispatch = useDispatch();
  const { data } = useSelector((state: RootState) => state.quizbook);
  const [unSolvedQuizBook, setUnSolvedQuizBook] = useState(false);
  const [isSortByDate, setIsSortByDate] = useState(true);
  const [filter, setFilter] = useState("");
  const [show, setShow] = useState(false);
  const [keyword, setKeyword] = useState("");

  const getQuizBookList = useCallback(
    (page) => {
      if (unSolvedQuizBook) {
        dispatch(
          getUnsolvedQuizBookListAsync.request({
            categoryId,
            page,
            isSortByDate,
          })
        );
      } else {
        dispatch(
          getQuizBookListAsync.request({ categoryId, page, isSortByDate })
        );
      }
      setShow(false);
    },
    [unSolvedQuizBook, isSortByDate]
  );

  const toggleDropDown = useCallback(() => {
    setShow(!show);
  }, [show]);

  const changeFilter = (e) => {
    const filter = e.target.value;
    if (filter === "all") setUnSolvedQuizBook(false);
    if (filter === "unsolved") setUnSolvedQuizBook(true);
    setFilter(filter);
  };

  const searchQuizBookList = (keyword: string) => {
    dispatch(searchQuizBookListAsync.request({ categoryId, keyword }));
  };

  useEffect(() => {
    getQuizBookList(1);
  }, [dispatch, unSolvedQuizBook, isSortByDate]);

  const delayedQueryCall = useRef(
    debounce((keyword: string) => searchQuizBookList(keyword), 500)
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
      <S.FilterColumn align={"flex-start"} onClick={changeFilter}>
        <S.ButtonFilter active={filter === "all"}>
          <S.FilterText value="all">전체 문제집</S.FilterText>
        </S.ButtonFilter>
        <S.ButtonFilter active={filter === "unsolved"}>
          <S.FilterText value="unsolved">안 푼 문제집</S.FilterText>
        </S.ButtonFilter>
      </S.FilterColumn>
      <S.DropDownFilterContainer>
        <S.FilterColumn align={"flex-end"}>
          <S.Filter onClick={toggleDropDown}>
            {isSortByDate ? "최신순" : "인기순"} ▽
          </S.Filter>
        </S.FilterColumn>
        <DropDown
          show={show}
          text1={"최신순"}
          text2={"인기순"}
          clickEvent1={() => {
            setIsSortByDate(true);
            setShow(false);
          }}
          clickEvent2={() => {
            setIsSortByDate(false);
            setShow(false);
          }}
        />
      </S.DropDownFilterContainer>

      {data &&
        data.map((quizBook) => {
          return (
            <QuizBook
              key={`quiz${quizBook.id}`}
              quizBook={quizBook}
              isUserQuizBook={false}
            ></QuizBook>
          );
        })}
    </S.QuizBookContainer>
  );
};

export default QuizBookContainer;
