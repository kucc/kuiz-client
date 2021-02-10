import endpoints from "@/common/endpoints";
import UserModel from "@/common/model/user";
import axios from "../axios";

const userAPI = {
  getUserInfo: async () => {
    const userInfo = await axios.get<UserModel>(endpoints.USER_API);
    console.log("실행");
    return userInfo;
  },
};

export default userAPI;
