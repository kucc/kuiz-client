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

  getUnsolvedQuizBookList: async () => {
    const { data: unsolvedQuizBookList } = await axios.get<
      QuizBookwithLikedModel[]
    >(`${endpoints.QUIZBOOK_API}/unsolved`);

    return unsolvedQuizBookList;
  },

  postSolveQuizBook: async (quizbookId, quizId, isCorrect) => {
    const { data: solveQuizBook } = await axios.post<SolveQuizBookModel>(
      `${endpoints.QUIZBOOK_API}/${quizbookId}/solve`,
      { quizId: quizId, isCorrect: isCorrect }
    );
    return solveQuizBook;
  },

  getQuizBookLike: async (quizBookId: number) => {
    const { data: likeResult } = await axios.get<LikeResultModel>(
      `${endpoints.QUIZBOOK_API}/${quizBookId}/like`
    );
    return likeResult;
  },

  postQuizBookLike: async (quizbookId: number) => {
    const { data: likeResult } = await axios.patch<QuizBookwithLikedModel>(
      `${endpoints.QUIZBOOK_API}/${quizbookId}/like`
    );
    return likeResult;
  },

  deleteQuizBook: async (quizbookId: number) => {
    const { data } = await axios.delete<{ result: boolean }>(
      `${endpoints.QUIZBOOK_API}/${quizbookId}`
    );

    if (!data.result) {
      alert("내부 오류입니다. 잠시 후 다시시도해주세요.");
      return;
    }

    return quizbookId;
  },
};

export default quizbookAPI;
