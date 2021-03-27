import endpoints from "@/common/endpoints";
import SolveQuizBookModel from "@/common/model/solve-quiz-book";
import QuizBookwithLikedModel from "@/common/model/quiz-book-with-liked";
import axios from "../axios";
import {
  QuizBookModel,
  QuizBookPatchBody,
  QuizBookwithQuizModel,
} from "@/common/model/quiz-book";

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
    keyword: string,
    isSortByDate: boolean,
    isUnSolved: boolean
  ): Promise<QuizBookwithLikedModel[]> => {
    const { data: quizBookList } = await axios.get<QuizBookwithLikedModel[]>(
      `${endpoints.QUIZBOOK_API}/search?categoryId=${categoryId}&page=${page}&keyword=${keyword}&isSortByDate=${isSortByDate}&isUnSolved=${isUnSolved}`
    );
    return quizBookList;
  },
  getUserQuizBook: async (
    path: string,
    isDone: boolean
  ): Promise<QuizBookwithLikedModel[]> => {
    const { data: userQuizBook } = await axios.get<QuizBookwithLikedModel[]>(
      `${endpoints.QUIZBOOK_API}/${path}?isDone=${isDone}`
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

  getAuthQuizBookwithQuiz: async (
    quizbookId: number
  ): Promise<QuizBookwithQuizModel> => {
    const { data: quizBook } = await axios.get<QuizBookwithQuizModel>(
      `${endpoints.QUIZBOOK_API}/${quizbookId}`
    );

    return quizBook;
  },

  editQuizBook: async (
    quizbookId: number,
    body: QuizBookPatchBody
  ): Promise<QuizBookwithQuizModel> => {
    const { data: quizBook } = await axios.patch<QuizBookwithQuizModel>(
      `${endpoints.QUIZBOOK_API}/${quizbookId}`,
      body
    );
    return quizBook;
  },
};

export default quizbookAPI;
