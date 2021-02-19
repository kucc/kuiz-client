import endpoints from "@/common/endpoints";
import QuizModel from "@/common/model/quiz";
import axios from "../axios";

const quizAPI = {
  getQuiz: async (quizbookId, order) => {
    const { data: quiz } = await axios.get<QuizModel>(
      `${endpoints.QUIZBOOK_API}/${quizbookId}/quiz?order=${order}`
    );
    return quiz;
  },
};

export default quizAPI;
