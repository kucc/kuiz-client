import QuizBookModel from "@/common/model/quiz-book";

export interface QuizBookProps {
  quizBook: QuizBookModel;
  isUserQuizBook: boolean;
}

export interface QuizBookRowProps {
  height: number;
}

export interface QuizTextProps {
  bold: boolean;
}
