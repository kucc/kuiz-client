import QuizModel from "@/common/model/quiz";

export interface QuizInputOptionProps {
  quiz: QuizModel | undefined;
  index: string;
  handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
