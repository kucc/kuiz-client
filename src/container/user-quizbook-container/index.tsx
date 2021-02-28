import QuizBook from "@/component/quizbook";
import { RootState } from "@/modules";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as S from "./styles";
import { UserQuizBookContainerProps } from "./types";
import { getUserQuizBookAsync } from "@/modules/user-quizbook";
import {
  USER_MADE_QUIZBOOK_MENU,
  USER_MAKE_QUIZBOOK_PATH,
  USER_MAKING_QUIZBOOK_MENU,
  USER_SOLVED_QUIZBOOK_MENU,
  USER_SOLVING_QUIZBOOK_MENU,
} from "@/asset/constant";

const UserQuizBookContainer = ({
  path,
  isDone,
}: UserQuizBookContainerProps) => {
  const isOwner = path === USER_MAKE_QUIZBOOK_PATH;
  const { data, loading, error } = useSelector(
    (state: RootState) => state.userQuizBook
  );

  const dispatch = useDispatch();

  const getUserQuizBook = ({ path, isDone }) => {
    dispatch(getUserQuizBookAsync.request({ path, isDone }));
  };

  useEffect(() => {
    getUserQuizBook({ path, isDone });
  }, [dispatch]);

  return (
    <S.UserQuizBookWrapper>
      <S.UserQuizBookTitle>
        {isOwner && isDone && USER_MADE_QUIZBOOK_MENU}
        {isOwner && !isDone && USER_MAKING_QUIZBOOK_MENU}
        {!isOwner && isDone && USER_SOLVED_QUIZBOOK_MENU}
        {!isOwner && !isDone && USER_SOLVING_QUIZBOOK_MENU}
      </S.UserQuizBookTitle>
      <S.UserQuizBookContainer>
        {data &&
          data.map((entity) => {
            return <QuizBook key={entity.id} quizBook={entity}></QuizBook>;
          })}
        {!data?.length && (
          <S.NoUserQuizBook>문제집이 없습니다.</S.NoUserQuizBook>
        )}
      </S.UserQuizBookContainer>
    </S.UserQuizBookWrapper>
  );
};

export default UserQuizBookContainer;
