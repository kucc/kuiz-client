import QuizBookContainer from "@/container/quizbook-container/index";
import React from "react";
import { useParams } from "react-router-dom";

interface CategoryId {
  categoryId: string;
}

const QuizBookListPage = () => {
  const { categoryId } = useParams<CategoryId>();
  if (!parseInt(categoryId)) throw new Error("잘못된 URL");

  return (
    <>
      <QuizBookContainer categoryId={parseInt(categoryId)} />
    </>
  );
};

export default QuizBookListPage;
