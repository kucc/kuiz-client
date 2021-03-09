import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CommonButton from "@/component/buttons/common-button";
import QuizBook from "@/component/quizbook";
import DropDown from "@/component/drop-down";
import { RootState } from "@/modules";
import {
  getQuizBookListAsync,
  searchQuizBookListAsync,
} from "@/modules/quiz-book";
import * as S from "./styles";
import { QuizBookContainerProps } from "./types";
import quizbookAPI from "@/common/lib/api/quizbook";
import QuizBookwithLikedModel from "@/common/model/quiz-book-with-liked";
import debounce from "@common/lib/debounce";

const QuizBookContainer = ({ categoryId }: QuizBookContainerProps) => {
  const [keyword, setKeyword] = useState("");

  const { data } = useSelector((state: RootState) => state.quizbook);

  const dispatch = useDispatch();
  const [quizBookData, setQuizBookData] = useState(data);

  const [unsolvedQuizBookList, setUnsolvedQuizBookList] = useState(
    [] as QuizBookwithLikedModel[]
  );
  const [isSortByDate, setIsSortByDate] = useState(true);

  const [filter, setFilter] = useState("");
  const [show, setShow] = useState(false);

  const getQuizBookList = () => {
    setIsSortByDate(true);
    dispatch(
      getQuizBookListAsync.request({ categoryId, page: 1, isSortByDate })
    );
    setShow(false);
  };

  const getQuizBookListByLikes = () => {
    setIsSortByDate(false);
    dispatch(
      getQuizBookListAsync.request({ categoryId, page: 1, isSortByDate })
    );
    setShow(false);
  };

  const toggleDropDown = () => {
    setShow(!show);
  };

  const getUnsolvedQuizBookList = async () => {
    const unsolvedQuizBookList = await quizbookAPI.getUnsolvedQuizBookList(
      categoryId,
      1,
      isSortByDate

    );
    setUnsolvedQuizBookList(unsolvedQuizBookList);
  };

  const changeFilter = (e) => {
    const filter = e.target.value;
    if (filter === "all") setQuizBookData(data);
    if (filter === "unsolved") setQuizBookData(unsolvedQuizBookList);
    setFilter(filter);
  };

  const searchQuizBookList = (keyword: string) => {
    dispatch(searchQuizBookListAsync.request({ categoryId, page: 1, keyword }));
  };

  useEffect(() => {
    getQuizBookList();
    getUnsolvedQuizBookList();
  }, [dispatch]);

  useEffect(() => {
    setQuizBookData(data);
  }, [data]);

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
          <CommonButton onClick={() => onClickHandler()} text={"검색"} />
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
          clickEvent1={getQuizBookList}
          clickEvent2={getQuizBookListByLikes}
        />
      </S.DropDownFilterContainer>

      {quizBookData ? (
        quizBookData.map((quizBook) => {
          return (
            <QuizBook
              key={`quiz${quizBook.id}`}
              quizBook={quizBook}
              isUserQuizBook={false}
            ></QuizBook>
          );
        })
      ) : (
        <></>
      )}
    </S.QuizBookContainer>
  );
};

export default QuizBookContainer;
