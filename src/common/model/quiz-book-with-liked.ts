export default interface QuizBookwithLikedModel {
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
  liked: boolean;
}
