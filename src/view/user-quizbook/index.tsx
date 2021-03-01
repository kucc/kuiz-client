import UserSolveQuizBookContainer from "@/container/user-quizbook-container";
import React from "react";
import { useLocation } from "react-router-dom";
import queryString from "querystring";
import {
  PARSE_QUIZBOOK_PATH_INDEX,
  PARSE_QUIZBOOK_QUERY_INDEX,
  USER_SOLVE_QUIZBOOK_PATH,
  USER_MAKE_QUIZBOOK_PATH,
} from "@/asset/constant";
import parseBool from "@/common/lib/parse-bool";

const UserQuizBookListPage = () => {
  const location = useLocation();
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
