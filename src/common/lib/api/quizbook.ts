import endpoints from "@/common/endpoints";
import SolveQuizBookModel from "@/common/model/solve-quiz-book";
import QuizBookwithLikedModel from "@/common/model/quiz-book-with-liked";
import axios from "../axios";
import QuizBookModel from "@/common/model/quiz-book";

const quizbookAPI = {
  getQuizBookList: async (
    categoryId: number,
    page: number,
    isSortByDate: boolean
  ): Promise<QuizBookwithLikedModel[]> => {
    const { data: quizBookList } = await axios.get<QuizBookwithLikedModel[]>(
      `${endpoints.QUIZBOOK_API}?categoryId=${categoryId}&page=${page}&isSortByDate=${isSortByDate}`
    );
    return quizBookList;
  },
  searchQuizBookList: async (
    categoryId: number,
    page: number,
    keyword: string
  ): Promise<QuizBookwithLikedModel[]> => {
    const { data: quizBookList } = await axios.get<QuizBookwithLikedModel[]>(
      `${endpoints.QUIZBOOK_API}/search?categoryId=${categoryId}&page=${page}&keyword=${keyword}`
    );
    return quizBookList;
  },
  getSolvingQuizBook: async (
    isDone: boolean,
    page: number
  ): Promise<QuizBookwithLikedModel[]> => {
    const { data: solveQuizBook } = await axios.get<QuizBookwithLikedModel[]>(
      `${endpoints.QUIZBOOK_API}/solving?isDone=${isDone}&page=${page}`
    );
    return solveQuizBook;
  },
  getUserQuizBook: async (
    path: string,
    isDone: boolean,
    page: number
  ): Promise<QuizBookwithLikedModel[]> => {
    const { data: userQuizBook } = await axios.get<QuizBookwithLikedModel[]>(
      `${endpoints.QUIZBOOK_API}/${path}?isDone=${isDone}&page=${page}`
    );

    return userQuizBook;
  },

  getUnsolvedQuizBookList: async (
    categoryId: number,
    page: number,
    isSortByDate: boolean
  ): Promise<QuizBookwithLikedModel[]> => {
    const { data: unsolvedQuizBookList } = await axios.get<
      QuizBookwithLikedModel[]
    >(
      `${endpoints.QUIZBOOK_API}/unsolved?categoryId=${categoryId}&page=${page}&isSortByDate=${isSortByDate}`
    );

    return unsolvedQuizBookList;
  },

  postSolveQuizBook: async (
    quizbookId: number,
    quizId: number,
    isCorrect: boolean
  ): Promise<SolveQuizBookModel> => {
    const { data: solveQuizBook } = await axios.post<SolveQuizBookModel>(
      `${endpoints.QUIZBOOK_API}/${quizbookId}/solve`,
      { quizId: quizId, isCorrect: isCorrect }
    );
    return solveQuizBook;
  },

  postQuizBookLike: async (
    quizbookId: number
  ): Promise<QuizBookwithLikedModel> => {
    const { data: likeResult } = await axios.patch<QuizBookwithLikedModel>(
      `${endpoints.QUIZBOOK_API}/${quizbookId}/like`
    );
    return likeResult;
  },

  deleteQuizBook: async (quizbookId: number): Promise<number> => {
    await axios
      .delete<{ result: boolean }>(`${endpoints.QUIZBOOK_API}/${quizbookId}`)
      .catch(() => {
        throw new Error();
      });

    return quizbookId;
  },

  postNewQuizBook: async (
    title: string,
    categoryId: number
  ): Promise<QuizBookModel> => {
    const { data: newQuizBook } = await axios.post<QuizBookModel>(
      endpoints.QUIZBOOK_API,
      { title, categoryId }
    );

    return newQuizBook;
  },

  checkAuth: async (quizbookId: number): Promise<boolean> => {
    const { data: isAuth } = await axios.get<boolean>(
      `${endpoints.QUIZBOOK_API}/${quizbookId}/authorize`
    );
    return isAuth;
  },
};

export default quizbookAPI;
