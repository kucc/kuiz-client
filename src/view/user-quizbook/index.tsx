import UserSolveQuizBookContainer from "@/container/user-quizbook-container";
import React from "react";
import { RouteComponentProps } from "react-router-dom";
import queryString from "querystring";
import {
  PARSE_QUIZBOOK_PATH_INDEX,
  PARSE_QUIZBOOK_QUERY_INDEX,
  USER_SOLVE_QUIZBOOK_PATH,
  USER_MAKE_QUIZBOOK_PATH,
} from "@/asset/constant";

const parseBool = (value: string | string[] | undefined) => {
  switch (value) {
    case "true":
    case "1":
      return true;
    case "false":
    case "0":
      return false;
    default:
      throw new Error("잘못된 URL");
  }
};

const UserQuizBookListPage = ({ location }: RouteComponentProps) => {
  const path = location.pathname.split("/")[PARSE_QUIZBOOK_PATH_INDEX];

  if (path !== USER_SOLVE_QUIZBOOK_PATH && path !== USER_MAKE_QUIZBOOK_PATH) {
    throw new Error("잘못된 URL");
  }

  const query = queryString.parse(
    location.search.substring(PARSE_QUIZBOOK_QUERY_INDEX)
  );
  const isDone = parseBool(query.isDone);

  return (
    <>
      <UserSolveQuizBookContainer path={path} isDone={isDone} />
    </>
  );
};

export default UserQuizBookListPage;
