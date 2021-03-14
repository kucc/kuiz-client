import endpoints from "@/common/endpoints";
import QuizModel from "@/common/model/quiz";
import axios from "../axios";

const quizAPI = {
  getAllQuiz: async (quizbookId: number): Promise<QuizModel[]> => {
    const { data: quizList } = await axios.get<QuizModel[]>(
      `${endpoints.QUIZBOOK_API}/${quizbookId}/quiz`
    );
    return quizList;
  },

  postQuiz: async (quizbookId: number, body: FormData): Promise<QuizModel> => {
    const { data: newQuiz } = await axios
      .post<QuizModel>(`${endpoints.QUIZBOOK_API}/${quizbookId}/quiz`, body)
      .catch(() => {
        throw new Error("잘못된 요청");
      });

    return newQuiz;
  },

  getQuiz: async (quizId: number): Promise<QuizModel> => {
    const { data: quiz } = await axios.get<QuizModel>(
      `${endpoints.QUIZ_API}/${quizId}`
    );

    return quiz;
  },

  editQuiz: async (quizId: number, body: FormData): Promise<QuizModel> => {
    const { data: quiz } = await axios
      .patch<QuizModel>(`${endpoints.QUIZ_API}/${quizId}`, body)
      .catch(() => {
        throw new Error("잘못된 요청");
      });

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
