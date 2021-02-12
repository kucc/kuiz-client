import React from "react";
import { RouteComponentProps } from "react-router-dom";

const QuizBookListPage = ({ history, match }: RouteComponentProps) => {
  const categoryId = match.params["categoryId"];
  if (!parseInt(categoryId)) throw new Error("잘못된 URL");

  return (
    <>
      <h1>퀴즈북 페이지</h1>
    </>
  );
};

export default QuizBookListPage;
