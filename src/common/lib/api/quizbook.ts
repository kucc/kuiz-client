import endpoints from "@/common/endpoints";
import QuizBookModel from "@/common/model/quiz-book";
import SolveQuizBookModel from "@/common/model/solve-quiz-book";
import UserSolveQuizBookModel from "@/common/model/user-solve-quiz-book";
import axios from "../axios";

const quizbookAPI = {
  getQuizBookList: async (
    categoryId: number,
    page: number,
    isSortByDate: boolean
  ) => {
    const { data: quizBookList } = await axios.get<QuizBookModel[]>(
      `${endpoints.QUIZBOOK_API}?categoryId=${categoryId}&page=${page}&isSortByDate=${isSortByDate}`
    );
    return quizBookList;
  },
  searchQuizBookList: async (categoryId: number, keyword: string) => {
    const { data: quizBookList } = await axios.get<QuizBookModel[]>(
      `${endpoints.QUIZBOOK_API}/search?categoryId=${categoryId}&keyword=${keyword}`
    );
    return quizBookList;
  },
  getSolvingQuizBook: async (isDone) => {
    const { data: solveQuizBook } = await axios.get<QuizBookModel[]>(
      `${endpoints.QUIZBOOK_API}/solving?isDone=${isDone}`
    );
    return solveQuizBook;
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

  postQuizBookLike: async (quizbookId: number) => {
    const { data: updatedQuizBook } = await axios.patch<QuizBookModel>(
      `${endpoints.QUIZBOOK_API}/${quizbookId}/like`
    );

    return updatedQuizBook;
  },
};

export default quizbookAPI;
