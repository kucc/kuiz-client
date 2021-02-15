import endpoints from "@/common/endpoints";
import UserModel from "@/common/model/user";
import axios from "../axios";

const userAPI = {
  getUserInfo: async () => {
    const { data: userInfo } = await axios.get<UserModel>(endpoints.USER_API);
    return userInfo;
  },
};

export default userAPI;
