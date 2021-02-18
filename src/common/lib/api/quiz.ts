import endpoints from "@/common/endpoints";
import QuizModel from "@/common/model/quiz";
import axios from "../axios";

const quizAPI = {
  getQuiz: async (quizBookId, order) => {
    const { data: quiz } = await axios.get<QuizModel>(
      `${endpoints.QUIZBOOK_API}/${quizBookId}/quiz?order=${order}`
    );
    return quiz;
  },
};

export default quizAPI;
