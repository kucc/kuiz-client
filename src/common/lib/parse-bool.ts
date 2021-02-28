const parseBool = (value: string | string[] | number | undefined) => {
  switch (value) {
    case "true":
    case "1":
    case 1:
      return true;
    case "false":
    case "0":
    case 0:
      return false;
    default:
      throw new Error("잘못된 URL");
  }
};

export default parseBool;
