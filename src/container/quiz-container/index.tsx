import React, { useEffect, useState } from "react";
import QuizModel from "@common/model/quiz";
import QuizImage from "@/component/quiz-image/index";
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
      {quizData.map((quiz, idx) => (
        <S.QuizWrapper key={idx}>
          <QuizImage imageURL={quiz.imageURL} />
          <QuizQuestion question={quiz.question} />
          <QuizOption quiz={quiz} />
        </S.QuizWrapper>
      ))}
    </S.QuizContainer>
  );
};

export default QuizContainer;
