import QuizRequestBody from "@/common/model/quiz-request-body";

const checkQuizInput = (body: QuizRequestBody) => {
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

  if (isChoice && !["1", "2", "3", "4"].includes(answer)) {
    alert("답을 입력해 주세요.");
    throw new Error();
  }

  if (isChoice && !body["option" + answer]) {
    alert("답을 바르게 입력해 주세요.");
    throw new Error();
  }
};

export default checkQuizInput;
