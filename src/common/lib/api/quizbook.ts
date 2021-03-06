import endpoints from "@/common/endpoints";
import QuizBookModel from "@/common/model/quiz-book";
import SolveQuizBookModel from "@/common/model/solve-quiz-book";
import QuizBookwithLikedModel from "@/common/model/quiz-book-with-liked";
import LikeResultModel from "@/common/model/like-result";
import axios from "../axios";

const quizbookAPI = {
  getQuizBookList: async (
    categoryId: number,
    page: number,
    isSortByDate: boolean
  ) => {
    const { data: quizBookList } = await axios.get<QuizBookwithLikedModel[]>(
      `${endpoints.QUIZBOOK_API}?categoryId=${categoryId}&page=${page}&isSortByDate=${isSortByDate}`
    );
    return quizBookList;
  },
  searchQuizBookList: async (
    categoryId: number,
    page: number,
    keyword: string
  ) => {
    const { data: quizBookList } = await axios.get<QuizBookwithLikedModel[]>(
      `${endpoints.QUIZBOOK_API}/search?categoryId=${categoryId}&page=${page}&keyword=${keyword}`
    );
    return quizBookList;
  },
  getSolvingQuizBook: async (isDone: boolean, page: number) => {
    const { data: solveQuizBook } = await axios.get<QuizBookwithLikedModel[]>(
      `${endpoints.QUIZBOOK_API}/solving?isDone=${isDone}&page=${page}`
    );
    return solveQuizBook;
  },
  getUserQuizBook: async (path: string, isDone: boolean, page: number) => {
    const { data: userQuizBook } = await axios.get<QuizBookwithLikedModel[]>(
      `${endpoints.QUIZBOOK_API}/${path}?isDone=${isDone}&page=${page}`
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
    const { data: likeResult } = await axios.patch<LikeResultModel>(
      `${endpoints.QUIZBOOK_API}/${quizbookId}/like`
    );

    return likeResult;
  },

  deleteQuizBook: async (quizbookId: number) => {
    const { data: result } = await axios.delete<QuizBookModel>(
      `${endpoints.QUIZBOOK_API}/${quizbookId}`
    );

    return result;
  },
};

export default quizbookAPI;
