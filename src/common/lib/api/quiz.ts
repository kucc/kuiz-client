import endpoints from "@/common/endpoints";
import QuizModel from "@/common/model/quiz";
import axios from "../axios";

const quizAPI = {
  getQuiz: async (quizbookId) => {
    const { data: quiz } = await axios.get<QuizModel>(
      `${endpoints.QUIZBOOK_API}/${quizbookId}/quiz`
    );
    return quiz;
  },

  postQuiz: async (quizbookId, question, answer, isChoice, option1, option2, option3, option4, imageURL, description) => {
    const { data: quiz } = await axios.post<QuizModel>(
      `${endpoints.QUIZBOOK_API}/${quizbookId}/quiz`,
      {
        question: question,
        answer: answer,
        isChoice: isChoice,
        option1: option1,
        option2: option2,
        option3: option3,
        option4: option4,
        imageURL: imageURL,
        description: description
      }
    );
    return quiz;
  }
};

export default quizAPI;
