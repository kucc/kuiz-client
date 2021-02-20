import QuizBookContainer from "@/container/quizbook-container/index";
import React from "react";
import { Link } from "react-router-dom";
import { RouteComponentProps } from "react-router-dom";
import * as S from "./styles";

const QuizBookListPage = ({ history, match }: RouteComponentProps) => {
  const categoryId = match.params["categoryId"];
  if (!parseInt(categoryId)) throw new Error("잘못된 URL");

  return (
    <>
      <QuizBookContainer />
    </>
  );
};

export default QuizBookListPage;
