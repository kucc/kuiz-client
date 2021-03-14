import endpoints from "@/common/endpoints";
import QuizModel from "@/common/model/quiz";
import QuizRequestBody from "@/common/model/quiz-request-body";
import axios from "../axios";

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
        throw new Error("잘못된 요청");
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
        throw new Error("잘못된 요청");
      });

    alert("문제 수정에 성공하였습니다.");

    return quiz;
  },

  deleteQuiz: async (quizId: number): Promise<number | undefined> => {
    const { data } = await axios.delete<{ result: boolean }>(
      `${endpoints.QUIZ_API}/${quizId}`
    );

    if (!data.result) {
      alert("내부 오류입니다. 잠시 후 다시시도해주세요.");
      return;
    }

    return quizId;
  },
};

export default quizAPI;
