import QuizBookModel from "@/common/model/quiz-book";
import CommonButton from "@/component/buttons/common-button";
import InputBox from "@/component/input-box";
import QuizBook from "@/component/quizbook";
import React from "react";
import * as S from "./styles";

const quizBookModelArray: QuizBookModel[] = [
  {
    id: 1,
    categoryId: 1,
    title: "동아리원 별명 맞추기",
    ownerId: 1,
    ownerName: "진용박",
    quizCount: 3,
    solvedCount: 14,
    createdAt: new Date(),
    completed: true,
    likeCount: 5,
  },
  {
    id: 2,
    categoryId: 1,
    title: "네트워크 상식퀴즈",
    ownerId: 1,
    ownerName: "진용박",
    quizCount: 3,
    solvedCount: 14,
    createdAt: new Date(),
    completed: true,
    likeCount: 3,
  },
  {
    id: 3,
    categoryId: 1,
    title: "무야호~",
    ownerId: 1,
    ownerName: "16 박진용",
    quizCount: 3,
    solvedCount: 14,
    createdAt: new Date(),
    completed: true,
    likeCount: 3,
  },
];

const QuizBookContainer = () => {
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
      {quizBookModelArray.map((quizBook) => {
        return (
          <QuizBook key={`quiz${quizBook.id}`} quizBook={quizBook}></QuizBook>
        );
      })}
    </S.QuizBookContainer>
  );
};

export default QuizBookContainer;
