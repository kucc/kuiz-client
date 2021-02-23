import QuizBookModel from "./quiz-book";

export default interface UserSolveQuizBookModel {
  id: number;
  completed: boolean;
  liked: boolean;
  savedQuizId: number;
  userId: number;
  quizBookId: number;
  quizBook: QuizBookModel;
}
