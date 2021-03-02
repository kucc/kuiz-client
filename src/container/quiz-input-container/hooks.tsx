import QuizModel from "@/common/model/quiz";
import QuizRequestBody from "@/common/model/quiz-request-body";
import { useCallback, useEffect, useState, useRef, useMemo } from "react";
import { NULL_STRING, OPTION_PREFIX } from "../../common/lib/quiz-constants";

export const defaultQuizOption = {
  option1: NULL_STRING,
  option2: NULL_STRING,
  option3: NULL_STRING,
  option4: NULL_STRING,
};

export const defaultQuizRequest: QuizRequestBody = {
  question: NULL_STRING,
  answer: NULL_STRING,
  description: NULL_STRING,
  imageURL: NULL_STRING,
  isChoice: true,
  ...defaultQuizOption,
};

export const useFetchQuiz = (quizId: number | null) => {
  const [data, setData] = useState<QuizModel>();
  const [body, setBody] = useState<QuizRequestBody>(defaultQuizRequest);

  if (!quizId) return { data, body, setBody };

  useEffect(() => {
    const getQuiz = async () => {
      const response = await fetch(`http://localhost:3308/api/quiz/${quizId}`, {
        method: "GET",
        credentials: "include",
      });
      const quiz = await response.json();
      setData(quiz);
      setBody({ ...quiz, imageURL: quiz.imageURL, isChoice: quiz.isChoice });
    };
    getQuiz();
  }, []);

  return { data, body, setBody };
};

export const saveAnswer = (data: QuizModel | undefined) => {
  const savedAnswer = {
    shortAnswer: NULL_STRING,
    choiceAnswer: NULL_STRING,
  };

  if (data && data.isChoice) {
    const key = OPTION_PREFIX + data.answer;
    savedAnswer.choiceAnswer = data[key];
  }
  if (data && !data.isChoice) {
    savedAnswer.shortAnswer = data?.answer;
  }

  return savedAnswer;
};

export const useQuizTypeRef = (quiz: QuizModel | undefined) => {
  const isChoiceContainer = useRef<HTMLSelectElement>(null);
  const isTextContainer = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    if (isChoiceContainer.current && quiz && isTextContainer.current) {
      isChoiceContainer.current.value = `${quiz.isChoice ? 1 : 0}`;
      isTextContainer.current.value = `${quiz.imageURL ? 0 : 1}`;
    }
  }, [quiz]);

  return {
    isChoiceContainer,
    isTextContainer,
  };
};

// 기존 makeQuiz custom hook
export const useMakeQuiz = (quizBookId) => {
  const [quiz, setQuiz] = useState<QuizRequestBody>(defaultQuizRequest);
  const [isText, setIsText] = useState(1);

  const handleUpload = useCallback(async () => {
    if (!quiz.question) {
      alert("문제를 입력해 주세요.");
      return;
    }
    if (!quiz.answer) {
      alert("답을 입력해 주세요.");
      return;
    }
    if (!quiz.description) {
      alert("문제에 대한 설명을 입력해 주세요.");
      return;
    }

    const response = await fetch(
      `http://localhost:3308/api/quiz-book/${quizBookId}/quiz`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(quiz),
      }
    );

    if (!response.ok) {
      console.log(await response.json());
      alert("문제 제출에 실패하였습니다.");
      return;
    }

    alert("문제 제출에 성공하였습니다.");
  }, [quizBookId, quiz]);

  return {
    quiz,
    isText,
    setQuiz,
    setIsText,
    handleUpload,
  };
};
