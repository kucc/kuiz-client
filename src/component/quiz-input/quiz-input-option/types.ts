import QuizModel from "@/common/model/quiz";
import QuizRequestBody from "@/common/model/quiz-request-body";

export interface QuizInputOptionProps {
  quiz: QuizModel | undefined;
  index: string;
  handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
