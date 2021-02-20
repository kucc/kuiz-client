export default interface QuizBookModel {
  id: number;
  title: string;
  ownerName: string;
  quizCount: number;
  solvedCount: number;
  createdAt: Date;
  likedCount: number;
  completed: boolean;
  categoryId: number;
  ownerId: number;
}
