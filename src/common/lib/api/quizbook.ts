import endpoints from "@/common/endpoints";
import SolveQuizBookModel from "@/common/model/user-solve-quiz-book";
import axios from "../axios";

const quizbookAPI = {
  postSolveQuizBook: async (quizbookId, quizOrder, quizId, isCorrect) => {
    const { data: solveQuizBook } = await axios.post<SolveQuizBookModel>(
      `${endpoints.QUIZBOOK_API}/${quizbookId}/solve`,
      { quizOrder: quizOrder, quizId: quizId, isCorrect: isCorrect }
    );
    return solveQuizBook;
  },
};

export default quizbookAPI;
