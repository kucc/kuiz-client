import React, { useEffect, useState } from "react";
import QuizModel from "@common/model/quiz";
import QuizOption from "@/component/quiz-option/index";
import QuizQuestion from "@/component/quiz-question/index";
import { getMokdata } from "./mok-data";
import * as S from "./styles";

const QuizContainer = () => {
  const [quizData, setQuizData] = useState([] as QuizModel[]);

  const getQuizList = async () => {
    const mokData = await getMokdata();
    setQuizData(mokData);
  };

  useEffect(() => {
    getQuizList();
  }, []);

  return (
    <S.QuizContainer>
      <S.QuizWrapper>
        {quizData.map((quiz) => (
          <QuizQuestion key={quiz.id} question={quiz.question} />
        ))}
        {quizData.map((quiz) => (
          <QuizOption key={quiz.id} quiz={quiz} />
        ))}
      </S.QuizWrapper>
    </S.QuizContainer>
  );
};

export default QuizContainer;
