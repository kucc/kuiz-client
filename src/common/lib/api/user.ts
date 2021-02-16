import endpoints from "@/common/endpoints";
import UserModel from "@/common/model/user";
import UserWithRankModel from "@/common/model/user-with-rank";
import axios from "../axios";

const userAPI = {
  getUserInfo: async () => {
    const { data: userInfo } = await axios.get<UserModel>(endpoints.USER_API);
    return userInfo;
  },
  getUserInfoWithRank: async () => {
    const { data: userInfoWithRank } = await axios.get<UserWithRankModel>(
      `${endpoints.USER_API}/rank/me`
    );
    return userInfoWithRank;
  },
};

export default userAPI;
