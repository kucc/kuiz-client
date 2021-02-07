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
    classification: "Computer Science",
  },
  {
    id: 2,
    name: "네트워크",
    classification: "Computer Science",
  },
  {
    id: 3,
    name: "유우머",
    classification: "잡동사니",
  },
  {
    id: 4,
    name: "알쓸신잡",
    classification: "잡동사니",
  },
  {
    id: 5,
    name: "hello",
    classification: "기타",
  },
];
