import UserModel from "@/common/model/user";

export const getRankListMokData = (): Promise<UserModel[]> => {
  return new Promise((res) => {
    setTimeout(() => {
      res(mokData);
    }, 500);
  });
};

export const mokData: UserModel[] = [
  {
    name: "16 이수영",
    email: "swim@naver.com",
    point: 3000,
    level: 3,
    isMember: false,
  },
  {
    name: "최지현",
    email: "jihyun@naver.com",
    point: 2000,
    level: 2,
    isMember: false,
  },
  {
    name: "박진용",
    email: "namda@naver.com",
    point: 1000,
    level: 1,
    isMember: false,
  },
  {
    name: "jyp",
    email: "parjackdaw@naver.com",
    point: 900,
    level: 1,
    isMember: false,
  },
];
