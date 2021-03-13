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

export interface QuizProps {
  quizBookId: number;
}

const QuizContainer = ({ quizBookId }: QuizProps) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [quizList, setQuizList] = useState({} as QuizModel[]);
  const [currentQuiz, setCurrentQuiz] = useState({} as QuizModel);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [quizCount, setQuizCount] = useState(0);
  const [totalQuizCount, setTotalQuizCount] = useState(0);
  const [completed, setCompleted] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [userAnswer, setUserAnswer] = useState("");
  const [solved, setSolved] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [correctQuizCount, setCorrectQuizCount] = useState(0);
  const history = useHistory();

  const getQuizList = async () => {
    const quizList = await quizAPI.getAllQuiz(quizBookId);
    if (!quizList.length) {
      dispatch(showAlertModal("추가된 문제가 없습니다."));
      return;
    }
    setQuizList(quizList);
    setTotalQuizCount(Object.keys(quizList).length);
    setCurrentQuiz(quizList[0]);
    setLoading(false);
  };

  useEffect(() => {
    getQuizList();
  }, []);

  const postSolveQuizBook = async () => {
    const solveQuizBook = await quizbookAPI.postSolveQuizBook(
      quizBookId,
      currentQuiz.id,
      correct
    );
    return solveQuizBook;
  };

  const getUserAnswer = (e: any) => {
    setUserAnswer(e.target.value);
  };

  const checkChoiceAnswer = (e: any) => {
    const selected = e.target.value;
    setSolved(true);
    setSelectedOption(selected);
    if (selected === currentQuiz.answer) {
      setCorrect(true);
      setCorrectQuizCount(correctQuizCount + 1);
    } else {
      setCorrect(false);
    }
    setQuizCount(quizCount + 1);
  };

  const checkWriteAnswer = (e: any) => {
    if (userAnswer === currentQuiz.answer) {
      setCorrect(true);
      setCorrectQuizCount(correctQuizCount + 1);
    } else {
      setCorrect(false);
    }
    setSolved(true);
    setQuizCount(quizCount + 1);
  };

  const goToNextQuiz = () => {
    postSolveQuizBook();
    if (quizCount === totalQuizCount) {
      getResultPage();
    } else {
      setCompleted(Math.round((quizCount / totalQuizCount) * 100));
      setSolved(false);
      setCorrect(false);
      setCurrentQuiz(quizList[currentIdx + 1]);
      setCurrentIdx(currentIdx + 1);
    }
  };

  const getResultPage = () => {
    history.push({
      pathname: "/result",
      state: {
        totalQuizCount: totalQuizCount,
        correctQuizCount: correctQuizCount,
      },
    });
  };

  return (
    <>
      {loading ? (
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
              correct={correct}
              getUserAnswer={getUserAnswer}
              checkChoiceAnswer={checkChoiceAnswer}
              checkWriteAnswer={checkWriteAnswer}
              goToNextQuiz={goToNextQuiz}
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
