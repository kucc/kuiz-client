import quizAPI from "@/common/lib/api/quiz";
import quizbookAPI from "@/common/lib/api/quizbook";
import React, { ReactElement, useEffect, useState } from "react";
import QuizModel from "@common/model/quiz";
import QuizImage from "@/component/quiz-image/index";
import QuizQuestion from "@/component/quiz-question/index";
import QuizOption from "@/component/quiz-option/index";
import QuizProgressBar from "@/component/quiz-progress-bar/index";
import * as S from "./styles";
import { useHistory } from "react-router-dom";
import LoadingSpinner from "@/component/common/loading-spinner";
import { useDispatch } from "react-redux";
import { showAlertModal } from "@/modules/modal";
import CustomAlert from "@/component/custom-alert";
import { QuizBookwithSolvingQuizModel } from "@/common/model/quiz-book";

export interface QuizProps {
  quizBookId: number;
}

const QuizContainer = ({ quizBookId }: QuizProps): ReactElement => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [quizBook, setQuizBook] = useState<QuizBookwithSolvingQuizModel>();
  const [currentQuiz, setCurrentQuiz] = useState<QuizModel>({} as QuizModel);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [solvedQuizCount, setSolvedQuizCount] = useState(0);

  const [completed, setCompleted] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [shortAnswer, setShortAnswer] = useState("");
  const [solved, setSolved] = useState(false);
  const [correctQuizCount, setCorrectQuizCount] = useState(0);

  const getQuizList = async () => {
    const quizBook = await quizAPI.getQuizBookwithSolvingQuiz(quizBookId);
    if (!quizBook.quiz.length) {
      dispatch(showAlertModal("추가된 문제가 없습니다."));
      return;
    }

    setQuizBook(quizBook);
    setCurrentQuiz(quizBook.quiz[0]);
  };

  useEffect(() => {
    getQuizList();
  }, []);

  useEffect(() => {
    if (!quizBook) return;
    if (quizBook.quizCount > quizBook.quiz.length) {
      alert("안 푼 문제부터 시작합니다.");
      setSolvedQuizCount(quizBook.quizCount - quizBook.quiz.length);
      setCorrectQuizCount(quizBook.savedCorrectCount);
    }
  }, [quizBook]);

  useEffect(() => {
    if (quizBook)
      setCompleted(Math.round((solvedQuizCount / quizBook.quizCount) * 100));
  }, [solvedQuizCount]);

  const postSolveQuizBook = async (correct: boolean) => {
    const solveQuizBook = await quizbookAPI.postSolveQuizBook(
      quizBookId,
      currentQuiz.id,
      correct
    );
  };

  const getUserAnswer = (e: any) => {
    setShortAnswer(e.target.value);
  };

  const checkUserAnswer = (userAnswer: string) => {
    setSolved(true);
    if (userAnswer === currentQuiz.answer) {
      postSolveQuizBook(true);
      setCorrectQuizCount(correctQuizCount + 1);
    } else {
      postSolveQuizBook(false);
    }
    setSolvedQuizCount(solvedQuizCount + 1);
  };

  const checkChoiceAnswer = (e: any) => {
    const selected = e.target.value;
    setSelectedOption(selected);
    checkUserAnswer(selected);
  };

  const checkWriteAnswer = () => {
    checkUserAnswer(shortAnswer);
  };

  const goToNextQuiz = () => {
    if (!quizBook) return;
    if (solvedQuizCount === quizBook.quizCount) {
      getResultPage();
    } else {
      setCompleted(Math.round((solvedQuizCount / quizBook.quizCount) * 100));
      setSolved(false);
      setCurrentQuiz(quizBook.quiz[currentIdx + 1]);
      setCurrentIdx(currentIdx + 1);
    }
  };

  const pressEnterKey = (e: any) => {
    if (e.key === "Enter") checkWriteAnswer();
  };

  const getResultPage = () => {
    if (!quizBook) return;
    history.push({
      pathname: "/result",
      state: {
        totalQuizCount: quizBook.quizCount,
        correctQuizCount: correctQuizCount,
      },
    });
  };

  return (
    <>
      {!quizBook ? (
        <LoadingSpinner />
      ) : (
        <S.QuizContainer>
          <S.QuizWrapper>
            {currentQuiz.imageURL && (
              <QuizImage imageURL={currentQuiz.imageURL} />
            )}
            <QuizQuestion question={currentQuiz.question} />
            <QuizOption
              quiz={currentQuiz}
              selectedOption={selectedOption}
              solved={solved}
              correct={
                selectedOption === currentQuiz.answer ||
                shortAnswer === currentQuiz.answer
              }
              getUserAnswer={getUserAnswer}
              checkChoiceAnswer={checkChoiceAnswer}
              checkWriteAnswer={checkWriteAnswer}
              goToNextQuiz={goToNextQuiz}
              pressEnterKey={pressEnterKey}
            />
            <QuizProgressBar completed={completed} />
          </S.QuizWrapper>
        </S.QuizContainer>
      )}
      <CustomAlert goBack={true} />
    </>
  );
};

export default QuizContainer;
