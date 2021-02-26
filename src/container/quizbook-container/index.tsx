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
import quizbookAPI from "@/common/lib/api/quizbook";

const QuizBookContainer = (
  { categoryId }: QuizBookContainerProps,
  props: DropDownProps
) => {
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
  const [show, setShow] = useState(false);

  const getQuizBookList = () => {
    dispatch(
      getQuizBookListAsync.request({ categoryId, page: 1, isSortByDate: true })
    );
    setShow(false);
  };

  const getQuizBookListByLikes = () => {
    dispatch(
      getQuizBookListAsync.request({ categoryId, page: 1, isSortByDate: false })
    );
    setShow(false);
  };

  const toggleDropDown = () => {
    setShow(!show);
  };

  const getUnsolvedQuizBookList = async () => {
    let idx = 1;
    while (1) {
      try {
        const quizBookList = await quizbookAPI.getQuizBookList(
          categoryId,
          idx,
          true
        );
        idx += 1;
        totalQuizBookList.push(...quizBookList);
      } catch {
        break;
      }
    }

    const solvedQuizBookList = await quizbookAPI.getSolvingQuizBook(true);

    totalQuizBookList.map((item1) => {
      const found = solvedQuizBookList.find((item2) => {
        if (item1.id === item2.id) {
          return item2;
        }
      });
      if (found === undefined) {
        unsolvedQuizBookList.push(item1);
      }
    });
  };

  const changeFilter = (e) => {
    const filter = e.target.value;
    if (filter === "all") setQuizBookData(data);
    if (filter === "unsolved") setQuizBookData(unsolvedQuizBookList);
  };

  useEffect(() => {
    getQuizBookList();
  }, [dispatch]);

  useEffect(() => {
    getUnsolvedQuizBookList();
  }, []);

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
      <S.FilterColumn align={"flex-start"} onClick={changeFilter}>
        <S.ButtonFilter>
          <S.FilterText value="all">전체 문제집</S.FilterText>
        </S.ButtonFilter>
        <S.ButtonFilter>
          <S.FilterText value="unsolved">안 푼 문제집</S.FilterText>
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
