import endpoints from "@/common/endpoints";
import SolveQuizBookModel from "@/common/model/solve-quiz-book";
import UserSolveQuizBookModel from "@/common/model/user-solve-quiz-book";
import axios from "../axios";

const quizbookAPI = {
  getSolvingQuizBook: async (isDone) => {
    const { data: solveQuizBook } = await axios.get<UserSolveQuizBookModel[]>(
      `${endpoints.QUIZBOOK_API}/solving?isDone=${isDone}`
    );
    return solveQuizBook;
  },

  postSolveQuizBook: async (quizbookId, quizOrder, quizId, isCorrect) => {
    const { data: solveQuizBook } = await axios.post<SolveQuizBookModel>(
      `${endpoints.QUIZBOOK_API}/${quizbookId}/solve`,
      { quizOrder: quizOrder, quizId: quizId, isCorrect: isCorrect }
    );
    return solveQuizBook;
  },
};

export default quizbookAPI;
