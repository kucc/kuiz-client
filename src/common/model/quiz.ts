export default interface QuizModel {
  id: number;
  quizBookId: number;
  question: string;
  answer: string;
  option1?: string;
  option2?: string;
  option3?: string;
  option4?: string;
  imageURL: string;
  order: number;
  description: string;
  isChoice: number;
}
