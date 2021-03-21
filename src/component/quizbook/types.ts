import QuizBookwithLikedModel from "@/common/model/quiz-book-with-liked";

export interface QuizBookProps {
  quizBook: QuizBookwithLikedModel;
  isUserQuizBook: boolean;
  isDone: boolean;
}

export interface QuizBookRowProps {
  height: number;
}

export interface QuizTextProps {
  bold: boolean;
}

export interface LikedProps {
  liked: boolean;
}
