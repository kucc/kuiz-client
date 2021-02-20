import QuizBookModel from "./quizbook";

export default interface UserSolveQuizBookModel {
  id: number;
  completed: boolean;
  liked: boolean;
  savedQuizId: number;
  userId: number;
  quizBookId: number;
  quizBook: QuizBookModel;
}
