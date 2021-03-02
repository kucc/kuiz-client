/* eslint-disable react/display-name */
import React, { FC, useEffect } from "react";
import userAPI from "@/common/lib/api/user";
import { insetUserInfo } from "@/modules/user";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const Auth = (Component: FC, isMember: boolean): FC => () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [authCookie] = useCookies(["accessToken"]);

  const checkIsValidLogin = async () => {
    if (!authCookie) {
      history.push("/login");
    } else {
      try {
        const userInfo = await userAPI.getUserInfo();
        dispatch(insetUserInfo(userInfo));
        if (isMember && !userInfo.isMember) {
          alert("kucc 회원만 가능합니다");
          history.push("/");
        }
      } catch (e) {
        history.push("/login");
      }
    }
  };

  useEffect(() => {
    checkIsValidLogin();
  }, []);

  return <Component />;
};

export default Auth;
