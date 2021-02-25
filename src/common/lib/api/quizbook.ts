import endpoints from "@/common/endpoints";
import QuizBookModel from "@/common/model/quiz-book";
import SolveQuizBookModel from "@/common/model/solve-quiz-book";
import UserSolveQuizBookModel from "@/common/model/user-solve-quiz-book";
import axios from "../axios";

const quizbookAPI = {
  getQuizBookList: async (categoryId: number, page: number) => {
    const { data: quizBookList } = await axios.get<QuizBookModel[]>(
      `${endpoints.QUIZBOOK_API}?categoryId=${categoryId}&page=${page}`
    );
    return quizBookList;
  },

  getUserQuizBook: async (path: string, isDone: boolean) => {
    const { data: userQuizBook } = await axios.get<QuizBookModel[]>(
      `${endpoints.QUIZBOOK_API}/${path}?isDone=${isDone}`
    );

    return userQuizBook;
  },

  postSolveQuizBook: async (quizbookId, quizId, isCorrect) => {
    const { data: solveQuizBook } = await axios.post<SolveQuizBookModel>(
      `${endpoints.QUIZBOOK_API}/${quizbookId}/solve`,
      { quizId: quizId, isCorrect: isCorrect }
    );
    return solveQuizBook;
  },
};

export default quizbookAPI;
