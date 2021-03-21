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
  serachUnSolvedQuizBookListAsync,
} from "@/modules/quiz-book";
import * as S from "./styles";
import { QuizBookContainerProps } from "./types";
import CustomAlert from "@/component/custom-alert";
import { hideAlertModal } from "@/modules/modal";
import useDebounce from "@/common/hooks/useDebounce";
import useToggle from "@/common/hooks/useToggle";

const QuizBookContainer = ({ categoryId }: QuizBookContainerProps) => {
  const dispatch = useDispatch();
  const { data } = useSelector((state: RootState) => state.quizBook);
  const [isUnSolved, setIsUnSolved] = useState(false);
  const [isSortByDate, setIsSortByDate] = useState(true);
  const [show, setShow, toggleDropDown] = useToggle(false);
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);
  const target = useRef<HTMLDivElement>(null);

  const debouncedKeyword = useDebounce(keyword, 500);

  const getQuizBookList = useCallback(
    (page) => {
      if (isUnSolved) {
        dispatch(
          getUnsolvedQuizBookListAsync.request({
            categoryId,
            page,
            isSortByDate,
          })
        );
        return;
      }
      dispatch(
        getQuizBookListAsync.request({ categoryId, page, isSortByDate })
      );
    },
    [isUnSolved, isSortByDate]
  );

  const changeFilter = (e) => {
    const newFilter = Boolean(e.target.value);
    if (isUnSolved !== newFilter) {
      dispatch(initQuizBookReducer());
      setPage(1);
      newFilter === false ? setIsUnSolved(false) : setIsUnSolved(true);
      setIsUnSolved(newFilter);
    }
  };

  const searchQuizBookList = useCallback(
    (keyword: string) => {
      if (!keyword) return;
      if (isUnSolved) {
        dispatch(
          serachUnSolvedQuizBookListAsync.request({
            categoryId,
            page,
            keyword,
            isSortByDate,
          })
        );
        return;
      }
      dispatch(
        searchQuizBookListAsync.request({
          categoryId,
          page,
          keyword,
          isSortByDate,
        })
      );
    },
    [isUnSolved, debouncedKeyword, page, isSortByDate]
  );

  const searchOnKeyUp = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    setPage(1);
    setKeyword(e.currentTarget.value);
    if (e.key === "Backspace") return;
  };

  const searchQuizBookDirectly = () => {
    searchQuizBookList(keyword);
  };

  useEffect(() => {
    if (!debouncedKeyword) return;
    searchQuizBookList(debouncedKeyword);
  }, [debouncedKeyword, isUnSolved, isSortByDate]);

  useEffect(() => {
    let observer: IntersectionObserver;
    if (target.current) {
      observer = new IntersectionObserver(
        (entries: IntersectionObserverEntry[]) => {
          if (entries[0].intersectionRatio <= 0) return;
          setPage(page + 1);
          observer.disconnect();
        },
        {
          root: null,
          threshold: 0.3,
        }
      );
      observer.observe(target.current as Element);
    }
    return () => observer && observer.disconnect();
  }, [data]);

  useEffect(() => {
    dispatch(hideAlertModal());
    dispatch(initQuizBookReducer());
    return () => {
      dispatch(initQuizBookReducer());
    };
  }, []);

  useEffect(() => {
    if (page === 1 || !debouncedKeyword) return;
    searchQuizBookList(debouncedKeyword);
  }, [debouncedKeyword, page]);

  useEffect(() => {
    if (keyword) return;
    getQuizBookList(page);
  }, [dispatch, isUnSolved, isSortByDate, page, keyword]);

  return (
    <>
      <S.QuizBookContainer>
        <S.SearchColumn>
          <S.InputBox onKeyUp={searchOnKeyUp} placeholder={"문제집검색"} />
          <S.CommonButtonWrapper>
            <CommonButton onClick={searchQuizBookDirectly} text={"검색"} />
          </S.CommonButtonWrapper>
        </S.SearchColumn>
        <S.FilterColumn align={"flex-start"} onClick={changeFilter}>
          <S.ButtonFilter active={isUnSolved === false}>
            <S.FilterText value={""}>전체 문제집</S.FilterText>
          </S.ButtonFilter>
          <S.ButtonFilter active={isUnSolved === true}>
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
                    setShow(false);
                  }
            }
            clickEvent2={
              isSortByDate
                ? () => {
                    setPage(1);
                    setIsSortByDate(false);
                    dispatch(initQuizBookReducer());
                    setShow(false);
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
                isDone={true}
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
