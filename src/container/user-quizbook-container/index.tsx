import QuizBook from "@/component/quizbook";
import { RootState } from "@/modules";
import React, { useEffect, useState } from "react";
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
  page,
}: UserQuizBookContainerProps) => {
  const isOwner = path === USER_MAKE_QUIZBOOK_PATH;
  const { data, loading, error } = useSelector(
    (state: RootState) => state.userQuizBook
  );

  const dispatch = useDispatch();

  const getUserQuizBook = ({ path, isDone, page }) => {
    dispatch(getUserQuizBookAsync.request({ path, isDone, page }));
  };

  useEffect(() => {
    getUserQuizBook({ path, isDone, page });
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
        {data?.length ? (
          data.map((entity) => {
            return (
              <React.Fragment key={entity.id}>
                <QuizBook quizBook={entity} isUserQuizBook={isOwner} />
              </React.Fragment>
            );
          })
        ) : (
          <S.NoUserQuizBook>문제집이 없습니다.</S.NoUserQuizBook>
        )}
      </S.UserQuizBookContainer>
    </S.UserQuizBookWrapper>
  );
};

export default UserQuizBookContainer;
