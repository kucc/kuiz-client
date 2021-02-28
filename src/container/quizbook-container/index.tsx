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


const QuizBookContainer = ({ categoryId }: QuizBookContainerProps) => {
  const [keyword, setKeyword] = useState("");
  const { data, loading, error } = useSelector(
    (state: RootState) => state.quizbook
  );

  const dispatch = useDispatch();

  const [quizBookData, setQuizBookData] = useState(data);
  const [totalQuizBookList, setTotalQuizBookList] = useState(
    [] as QuizBookModel[]
  );
  const [unsolvedQuizBookList, setUnsolvedQuizBookList] = useState(
    [] as QuizBookModel[]
  );

  const [filter, setFilter] = useState("");
  const [show, setShow] = useState(false);
  const [text, setText] = useState("최신순");
  const [finish, setFinish] = useState(false);

  const getQuizBookList = () => {
    dispatch(
      getQuizBookListAsync.request({ categoryId, page: 1, isSortByDate: true })
    );
    setText("최신순");
    setShow(false);
  };

  const getQuizBookListByLikes = () => {
    dispatch(
      getQuizBookListAsync.request({ categoryId, page: 1, isSortByDate: false })
    );

    setText("인기순");
    setShow(false);
  };

  const toggleDropDown = () => {
    setShow(!show);
  };

  const getTotalQuizBookList = async () => {
    let idx = 1;
    while (1) {
      try {
        const quizBookList = await quizbookAPI.getQuizBookList(
          categoryId,
          idx,
          true
        );
        idx += 1;
        setTotalQuizBookList([...totalQuizBookList, ...quizBookList]);
      } catch {
        break;
      }
    }
    setFinish(true);
  };

  const getUnsolvedQuizBookList = async () => {
    const solvedQuizBookList = await quizbookAPI.getSolvingQuizBook(true);

    totalQuizBookList.map((quizBook) => {
      const found = solvedQuizBookList.find((solvedQuizBook) => {
        if (quizBook.id === solvedQuizBook.id) {
          return solvedQuizBook;
        }
      });

      if (found === undefined) {
        unsolvedQuizBookList.push(quizBook);
      }
    });
  };

  const changeFilter = (e) => {
    const filter = e.target.value;
    if (filter === "all") setQuizBookData(data);
    if (filter === "unsolved") setQuizBookData(unsolvedQuizBookList);
    setFilter(filter);
  };

  const searchQuizBookList = (keyword: string) => {
    dispatch(searchQuizBookListAsync.request({ categoryId, keyword }));
  };

  useEffect(() => {
    getQuizBookList();
    getTotalQuizBookList();
  }, [dispatch]);

  useEffect(() => {
    setQuizBookData(data);
  }, [data]);

  useEffect(() => {
    getUnsolvedQuizBookList();
  }, [finish]);

  const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      timer = setTimeout(() => {
        func(args);
      }, delay);
    };
  };

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
          <S.Filter onClick={toggleDropDown}>{text} ▽</S.Filter>
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
