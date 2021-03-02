/* eslint-disable react/display-name */
import React, { FC, useEffect } from "react";
import userAPI from "@/common/lib/api/user";
import { insetUserInfo } from "@/modules/user";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const Auth = (Component: FC): FC => () => {
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

  return <Component />;
};

export default Auth;
