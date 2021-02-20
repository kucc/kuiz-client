import QuizBookContainer from "@/container/quizbook-container/index";
import React from "react";
import { RouteComponentProps } from "react-router-dom";

const QuizBookListPage = ({ history, match }: RouteComponentProps) => {
  const categoryId = match.params["categoryId"];
  if (!parseInt(categoryId)) throw new Error("잘못된 URL");

  return (
    <>
      <QuizBookContainer categoryId={categoryId} />
    </>
  );
};

export default QuizBookListPage;
