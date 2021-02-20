import React, { useEffect } from "react";
import userAPI from "@/common/lib/api/user";
import { insetUserInfo } from "@/modules/user";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Auth = (children: any) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [authCookie] = useCookies(["accessToken"]);

  const checkUserLogin = async () => {
    if (!authCookie) {
      history.push("/login");
    } else {
      try {
        const userInfo = await userAPI.getUserInfo();
        dispatch(insetUserInfo(userInfo));
      } catch (e) {
        history.push("/login");
      }
    }
  };

  useEffect(() => {
    checkUserLogin();
  }, []);

  return children;
};

export default Auth;
