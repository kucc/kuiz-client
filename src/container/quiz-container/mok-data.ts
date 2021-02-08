import QuizModel from "@common/model/quiz";

export const getMokdata = (): Promise<QuizModel[]> => {
  return new Promise((res) => {
    setTimeout(() => {
      res(mokData);
    }, 1000);
  });
};

export const mokData: QuizModel[] = [
  {
    id: 1,
    quizBookId: 1,
    question: "현채의 별명은?",
    answer: "초코송이",
    option1: "초코송이",
    option2: "양파링",
    option3: "홈런볼",
    option4: "새우깡",
    imageURL:
      "https://user-images.githubusercontent.com/46309902/107244451-5f70aa80-6a71-11eb-8dfc-d3eb17b8749c.jpg",
    description: "",
    isChoice: 1,
  },
];
