import QuizModel from "./quiz";

export interface QuizBookModel {
  id: number;
  categoryId: number;
  title: string;
  ownerId: number;
  ownerName: string;
  quizCount: number;
  solvedCount: number;
  likedCount: number;
  createdAt: Date;
  completed: boolean;
}

export interface QuizBookwithQuizModel {
  id: number;
  categoryId: number;
  title: string;
  ownerId: number;
  ownerName: string;
  quizCount: number;
  solvedCount: number;
  likedCount: number;
  createdAt: Date;
  completed: boolean;
  quiz: QuizModel[];
}

export interface QuizBookPatchBody {
  categoryId?: number;
  title?: string;
  completed?: boolean;
}
