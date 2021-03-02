import endpoints from "@/common/endpoints";
import QuizModel from "@/common/model/quiz";
import QuizRequestBody from "@/common/model/quiz-request-body";
import axios from "../axios";
import checkQuizInput from "../check-quiz-input";

const quizAPI = {
  getAllQuiz: async (quizbookId: number) => {
    const { data: quizList } = await axios.get<QuizModel[]>(
      `${endpoints.QUIZBOOK_API}/${quizbookId}/quiz`
    );
    return quizList;
  },

  postQuiz: async (quizbookId: number, body) => {
    const newQuiz = await axios
      .post<QuizRequestBody>(
        `${endpoints.QUIZBOOK_API}/${quizbookId}/quiz`,
        body
      )
      .catch((err) => {
        alert("다시 시도해주세요.");
      });
    alert("문제 제출에 성공하였습니다.");

    return newQuiz;
  },

  getQuiz: async (quizId: number) => {
    const { data: quiz } = await axios.get<QuizModel>(
      `${endpoints.QUIZ_API}/${quizId}`
    );

    return quiz;
  },

  editQuiz: async (quizId: number, body) => {
    const quiz = await axios
      .patch<QuizRequestBody>(`${endpoints.QUIZ_API}/${quizId}`, body)
      .catch((err) => {
        alert("다시 시도해주세요.");
      });

    alert("문제 수정에 성공하였습니다.");

    return quiz;
  },
};

export default quizAPI;
