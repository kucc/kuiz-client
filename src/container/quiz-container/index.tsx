import quizAPI from "@/common/lib/api/quiz";
import React, { useEffect, useState } from "react";
import QuizModel from "@common/model/quiz";
import QuizImage from "@/component/quiz-image/index";
import QuizOption from "@/component/quiz-option/index";
import QuizQuestion from "@/component/quiz-question/index";
import QuizProgressBar from "@/component/quiz-progress-bar/index";
import { getMokdata } from "./mok-data";
import { QuizListType } from "./types";
import * as S from "./styles";
import { mokData } from "../quiz-container/mok-data";
import { RouteComponentProps } from "react-router-dom";
import LoadingSpinner from "@/component/common/loading-spinner";

export interface MatchParams {
  quizbookId: string;
}

const QuizContainer: React.FC<RouteComponentProps<MatchParams>> = ({
  match,
}) => {
  const [loading, setLoading] = useState(true);
  const [quiz, setQuiz] = useState({} as QuizModel);
  const quizbookId = Number(match.params.quizbookId);

  const [order, setOrder] = useState(1);

  const getQuiz = async () => {
    const quiz = await quizAPI.getQuiz(quizbookId, order);
    setQuiz(quiz);
    setLoading(false);
  };

  const [currentQuiz, setcurrentQuiz] = useState(quiz);

  const [selectedOption, setSelectedOption] = useState("");
  const [userAnswer, setUserAnswer] = useState("");
  const [solved, setSolved] = useState(false);
  const [correct, setCorrect] = useState(false);

  useEffect(() => {
    getQuiz();
  }, []);

  const getUserAnswer = (e: any) => {
    setUserAnswer(e.target.value);
  };

  const checkChoiceAnswer = (e: any) => {
    const selected = e.target.value;
    setSolved(true);
    setSelectedOption(selected);
    setOrder(order + 1);
  };

  const checkWriteAnswer = (e: any) => {
    if (userAnswer === currentQuiz.answer) {
      setCorrect(true);
    } else {
      setCorrect(false);
    }
    setSolved(true);
    setOrder(order + 1);
  };

  const goToNextQuiz = () => {
    setSolved(false);
    getQuiz();
  };

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <S.QuizContainer>
          <S.QuizWrapper>
            <QuizImage imageURL={quiz.imageURL} />
            <QuizQuestion question={quiz.question} />
            <QuizOption
              quiz={quiz}
              selectedOption={selectedOption}
              solved={solved}
              correct={correct}
              getUserAnswer={getUserAnswer}
              checkChoiceAnswer={checkChoiceAnswer}
              checkWriteAnswer={checkWriteAnswer}
              goToNextQuiz={goToNextQuiz}
            />
            <QuizProgressBar />
          </S.QuizWrapper>
        </S.QuizContainer>
      )}
    </>
  );
};

export default QuizContainer;
