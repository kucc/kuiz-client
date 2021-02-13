import QuizModel from "@common/model/quiz";

export interface QuizOptionProps {
  quiz: QuizModel;
  selectedOption: string;
  solved: boolean;
  correct: boolean;
  getUserAnswer: (e: any) => void;
  checkChoiceAnswer: (e: any) => void;
  checkWriteAnswer: (e: any) => void;
  goToNextQuiz: () => void;
}
