import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CommonButton from "@/component/buttons/common-button";
import QuizBook from "@/component/quizbook";
import DropDown from "@/component/drop-down";
import { RootState } from "@/modules";
import {
  getQuizBookListAsync,
  getUnsolvedQuizBookListAsync,
  initQuizBookReducer,
  searchQuizBookListAsync,
} from "@/modules/quiz-book";
import * as S from "./styles";
import { QuizBookContainerProps } from "./types";
import debounce from "@common/lib/debounce";
import CustomAlert from "@/component/custom-alert";

const QuizBookContainer = ({ categoryId }: QuizBookContainerProps) => {
  const dispatch = useDispatch();
  const { data } = useSelector((state: RootState) => state.quizbook);
  const [unSolvedQuizBook, setUnSolvedQuizBook] = useState(false);
  const [isSortByDate, setIsSortByDate] = useState(true);
  const [show, setShow] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);
  const target = useRef<HTMLDivElement>(null);

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
    const newFilter = Boolean(e.target.value);
    if (unSolvedQuizBook !== newFilter) {
      dispatch(initQuizBookReducer());
      setPage(1);
      newFilter === false
        ? setUnSolvedQuizBook(false)
        : setUnSolvedQuizBook(true);
      setUnSolvedQuizBook(newFilter);
    }
  };

  const searchQuizBookList = useCallback(
    (keyword: string) => {
      dispatch(searchQuizBookListAsync.request({ categoryId, page, keyword }));
    },
    [keyword]
  );

  useEffect(() => {
    let observer: IntersectionObserver;
    if (target.current) {
      observer = new IntersectionObserver(
        (entries: IntersectionObserverEntry[]) => {
          if (entries[0].intersectionRatio <= 0) return;
          setPage(page + 1);
        },
        {
          root: null,
          rootMargin: "0px 0px 0px 10px",
          threshold: 0.3,
        }
      );
      observer.observe(target.current as Element);
    }
    return () => observer && observer.disconnect();
  }, [data]);

  useEffect(() => {
    getQuizBookList(page);
  }, [dispatch, unSolvedQuizBook, isSortByDate, page]);

  useEffect(() => {
    return () => {
      dispatch(initQuizBookReducer());
    };
  }, []);

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
    <>
      <S.QuizBookContainer>
        <S.SearchColumn>
          <S.InputBox onChange={onChangeHandler} placeholder={"문제집검색"} />
          <S.CommonButtonWrapper>
            <CommonButton onClick={() => onClickHandler()} text={"검색"} />
          </S.CommonButtonWrapper>
        </S.SearchColumn>
        <S.FilterColumn align={"flex-start"} onClick={changeFilter}>
          <S.ButtonFilter active={unSolvedQuizBook === false}>
            <S.FilterText value={""}>전체 문제집</S.FilterText>
          </S.ButtonFilter>
          <S.ButtonFilter active={unSolvedQuizBook === true}>
            <S.FilterText value={1}>안 푼 문제집</S.FilterText>
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
            clickEvent1={
              isSortByDate
                ? () => {
                    setShow(false);
                  }
                : () => {
                    setPage(1);
                    setIsSortByDate(true);
                    dispatch(initQuizBookReducer());
                  }
            }
            clickEvent2={
              isSortByDate
                ? () => {
                    setPage(1);
                    setIsSortByDate(false);
                    dispatch(initQuizBookReducer());
                  }
                : () => {
                    setShow(false);
                  }
            }
          />
        </S.DropDownFilterContainer>

        {data &&
          data.map((quizBook) => {
            return (
              <QuizBook
                key={`quiz${quizBook.id}`}
                quizBook={quizBook}
                isUserQuizBook={false}
                ref={target}
              ></QuizBook>
            );
          })}
      </S.QuizBookContainer>
      <CustomAlert />
    </>
  );
};

export default QuizBookContainer;
