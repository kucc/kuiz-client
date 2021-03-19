import QuizRequestBody from "@/common/model/quiz-request-body";
import { optionIndexArray, OPTION_PREFIX } from "./quiz-constants";

const checkQuizInput = (body: QuizRequestBody): void => {
  const { question, answer, description, isChoice } = body;

  if (!question) {
    alert("문제를 입력해 주세요.");
    throw new Error();
  }

  if (!answer) {
    alert("답을 입력해 주세요.");
    throw new Error();
  }

  if (!description) {
    alert("문제에 대한 설명을 입력해 주세요.");
    throw new Error();
  }

  if (isChoice && !optionIndexArray.includes(answer)) {
    alert("답을 입력해 주세요.");
    throw new Error();
  }

  if (isChoice && !body[OPTION_PREFIX + answer]) {
    alert("답을 바르게 입력해 주세요.");
    throw new Error();
  }
};

export default checkQuizInput;
