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
    description: "현채의 별명은 초코송이이다.",
    isChoice: 1,
  },

  {
    id: 2,
    quizBookId: 1,
    question: "다음 중 강아지에게 주면 안 되는 과일은?",
    answer: "포도",
    option1: "체리",
    option2: "망고",
    option3: "포도",
    option4: "바나나",
    imageURL:
      "https://user-images.githubusercontent.com/46309902/107600044-e4241a00-6c65-11eb-8bc2-4e0d7ba59230.jpg",
    description:
      "연구에 따르면 강아지가 포도를 먹을 경우 신장의 기능 저하를 일으키며, 경우에 따라서는 급성 신부전증으로 인해 사망에 이를 수 있다고 한다.",
    isChoice: 1,
  },
  {
    id: 3,
    quizBookId: 2,
    question: "퀴즈북 2 문제 1",
    answer: "선택지1",
    option1: "선택지1",
    option2: "선택지2",
    option3: "선택지3",
    option4: "선택지4",
    imageURL:
      "https://user-images.githubusercontent.com/46309902/107244451-5f70aa80-6a71-11eb-8dfc-d3eb17b8749c.jpg",
    description: "현채의 별명은 초코송이이다.",
    isChoice: 1,
  },
  {
    id: 4,
    quizBookId: 1,
    question: "세상에서 가장 섬이 많은 나라는?",
    answer: "인도네시아",
    option1: "인도네시아",
    option2: "필리핀",
    option3: "말레이시아",
    option4: "일본",
    imageURL:
      "https://user-images.githubusercontent.com/46309902/107599693-b1c5ed00-6c64-11eb-8b01-e45e377dc98c.jpg",
    description: "확인된 것만 약 1만 8천 개의 섬이 존재한다고 한다.",
    isChoice: 1,
  },
  {
    id: 5,
    quizBookId: 1,
    question: "현채의 별명은?",
    answer: "초코송이",
    imageURL:
      "https://user-images.githubusercontent.com/46309902/107244451-5f70aa80-6a71-11eb-8dfc-d3eb17b8749c.jpg",
    description: "현채의 별명은 초코송이이다.",
    isChoice: 0,
  },
];
