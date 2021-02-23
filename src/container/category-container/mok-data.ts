import CategoryModel from "@common/model/category";

export const getMokdata = (): Promise<CategoryModel[]> => {
  return new Promise((res) => {
    setTimeout(() => {
      res(mokData);
    }, 1000);
  });
};
export const mokData: CategoryModel[] = [
  {
    id: 1,
    name: "알고리즘",
    topic: "Computer Science",
  },
  {
    id: 2,
    name: "네트워크",
    topic: "Computer Science",
  },
  {
    id: 3,
    name: "유우머",
    topic: "잡동사니",
  },
  {
    id: 4,
    name: "알쓸신잡",
    topic: "잡동사니",
  },
  {
    id: 5,
    name: "hello",
    topic: "기타",
  },
];
