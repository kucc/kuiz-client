import endpoints from "@/common/endpoints";
import QuizBookModel from "@/common/model/quiz-book";
import axios from "../axios";

const quizbookAPI = {
  getQuizBookList: async (categoryId: number, page: number) => {
    const { data: quizBookList } = await axios.get<QuizBookModel[]>(
      `${endpoints.QUIZBOOK_API}?categoryId=${categoryId}&page=${page}`
    );
    return quizBookList;
  },
};

export default quizbookAPI;
