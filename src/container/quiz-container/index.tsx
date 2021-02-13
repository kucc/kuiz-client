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
interface MatchParams {
  quizId?: string;
}

const QuizContainer = ({
  match,
  history,
}: RouteComponentProps<MatchParams>) => {
  const quizList = {} as QuizListType;
  const [quizData, setQuizData] = useState([] as QuizModel[]);

  const givenQuizBookId = 1; // id가 1인 문제집 클릭한 경우로 가정
  const [currentQuiz, setcurrentQuiz] = useState(mokData[0]);

  const [selectedOption, setSelectedOption] = useState("");
  const [userAnswer, setUserAnswer] = useState("");
  const [solved, setSolved] = useState(false);
  const [correct, setCorrect] = useState(false);

  const getQuizList = async () => {
    const mokData = await getMokdata();
    setQuizData(mokData);
  };

  useEffect(() => {
    getQuizList();
    goToNextQuiz();
  }, []);

  quizData.forEach((quiz) => {
    const quizArray = quizList[quiz.quizBookId];
    if (Array.isArray(quizArray)) {
      quizList[quiz.quizBookId] = [...quizArray, quiz];
    } else {
      quizList[quiz.quizBookId] = [quiz];
    }
  });

  const quizBookIdList = Object.keys(quizList);

  const getUserAnswer = (e: any) => {
    setUserAnswer(e.target.value);
  };

  const checkChoiceAnswer = (e: any) => {
    const selected = e.target.value;
    setSolved(true);
    setSelectedOption(selected);
  };

  const checkWriteAnswer = (e: any) => {
    if (userAnswer === currentQuiz.answer) {
      setCorrect(true);
    } else {
      setCorrect(false);
    }
    setSolved(true);
  };

  const goToNextQuiz = () => {
    if (quizList[givenQuizBookId]) {
      const currentQuizIdx = quizList[givenQuizBookId].indexOf(currentQuiz);
      const nextQuizIdx = quizList[givenQuizBookId][currentQuizIdx + 1];
      if (nextQuizIdx) {
        setcurrentQuiz(nextQuizIdx);
        history.push(`/quiz/${currentQuiz.id}`);
      }
      setSolved(false);
    }
  };

  return currentQuiz ? (
    <>
      {quizBookIdList.map((quizBookId, idx) => (
        <S.QuizContainer key={idx}>
          {Number(quizBookId) === givenQuizBookId ? (
            <S.QuizWrapper key={idx}>
              <QuizImage imageURL={currentQuiz.imageURL} />
              <QuizQuestion question={currentQuiz.question} />
              <QuizOption
                quiz={currentQuiz}
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
          ) : null}
        </S.QuizContainer>
      ))}
    </>
  ) : (
    <div>Loading ...</div>
  );
};

export default QuizContainer;
