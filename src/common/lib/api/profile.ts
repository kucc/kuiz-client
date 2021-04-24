import axios from "axios";
import endpoints from "../../endpoints";
import { QuizBookModel } from "../../model/quiz-book";

const ProfileAPI = {
  getQuizBookListByOwner: async (isDone: boolean) => {
    const { data: quizBookList } = await axios.get<QuizBookModel[]>(
      `${endpoints.QUIZBOOK_API}/owner?isDone=${isDone}`
    );
    return quizBookList;
  },
  getQuizBookListBySolve: async (isDone: boolean) => {
    const { data: quizBookList } = await axios.get<QuizBookModel[]>(
      `${endpoints.QUIZBOOK_API}/solving?isDone=${isDone}`
    );
    return quizBookList;
  },
};

export default ProfileAPI;
