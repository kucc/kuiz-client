import QuizModel from "@/common/model/quiz";
import QuizRequestBody from "@/common/model/quiz-request-body";
import { useEffect, useRef } from "react";
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
  isChoice: 1,
  ...defaultQuizOption,
};

export const saveAnswer = (
  data: QuizModel | undefined
): {
  shortAnswer: string;
  choiceAnswer: string;
} => {
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

export const useQuizTypeRef = (
  quiz: QuizModel | undefined
): {
  isChoiceContainer;
  isTextContainer;
} => {
  const isChoiceContainer = useRef<HTMLSelectElement>(null);
  const isTextContainer = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    if (isChoiceContainer.current && quiz && isTextContainer.current) {
      isChoiceContainer.current.value = `${quiz.isChoice}`;
      isTextContainer.current.value = `${quiz.imageURL ? 0 : 1}`;
    }
  }, [quiz]);

  return {
    isChoiceContainer,
    isTextContainer,
  };
};
