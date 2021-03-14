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
      `${endpoints.QUIZBOOK_API}/my/solving?isDone=${isDone}&page=${page}`
    );
    return solveQuizBook;
  },
  getUserQuizBook: async (path: string, isDone: boolean, page: number) => {
    const { data: userQuizBook } = await axios.get<QuizBookwithLikedModel[]>(
      `${endpoints.QUIZBOOK_API}/my/${path}?isDone=${isDone}&page=${page}`
    );
    return userQuizBook;
  },

  getUnsolvedQuizBookList: async (
    categoryId: number,
    page: number,
    isSortByDate: boolean
  ) => {
    const { data: unsolvedQuizBookList } = await axios.get<
      QuizBookwithLikedModel[]
    >(
      `${endpoints.QUIZBOOK_API}/unsolved?categoryId=${categoryId}&page=${page}&isSortByDate=${isSortByDate}`
    );

    return unsolvedQuizBookList;
  },

  postSolveQuizBook: async (quizbookId, quizId, isCorrect) => {
    const { data: solveQuizBook } = await axios.post<SolveQuizBookModel>(
      `${endpoints.QUIZBOOK_API}/${quizbookId}/solve`,
      { quizId: quizId, isCorrect: isCorrect }
    );
    return solveQuizBook;
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
  postNewQuizBook: async (title: string, categoryId: number) => {
    const { data: newQuizBook } = await axios.post<QuizBookModel>(
      endpoints.QUIZBOOK_API,
      { title, categoryId }
    );

    if (!newQuizBook.id) {
      alert("문제집 생성 실패");
      return;
    }

    return newQuizBook;
  },
};

export default quizbookAPI;
