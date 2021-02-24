import endpoints from "@/common/endpoints";
import UserWithRankModel from "@/common/model/user-with-rank";
import axios from "../axios";

const rankAPI = {
  getRanking: async (start: number, count: number) => {
    const { data: rankList } = await axios.get<UserWithRankModel[]>(
      `${endpoints.USER_API}/rank?start=${start}&count=${count}`
    );

    return rankList;
  },
};

export default rankAPI;
