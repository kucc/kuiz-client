/* eslint-disable react/display-name */
import React, { FC, useEffect, useState } from "react";
import userAPI from "@/common/lib/api/user";
import { insetUserInfo } from "@/modules/user";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import CustomAlert from "@component/custom-alert";
import { showAlertModal } from "@/modules/modal";

const Auth = (Component: FC, isMember: boolean): FC => () => {
  const dispatch = useDispatch();
  const [authCookie] = useCookies(["accessToken"]);
  const [redirectURL, setRedirectURL] = useState<string>("/login");
  const [isValidLogin, setIsValidLogin] = useState<boolean>(false);

  const checkIsValidLogin = async () => {
    if (!authCookie) {
      dispatch(showAlertModal("로그인이 필요한 서비스입니다"));
    } else {
      try {
        const userInfo = await userAPI.getUserInfo();
        dispatch(insetUserInfo(userInfo));
        if (isMember && !userInfo.isMember) {
          setRedirectURL("/");
          dispatch(showAlertModal("kucc 회원에게만 허용된 페이지 입니다"));
          return;
        }
        setIsValidLogin(true);
      } catch (e) {
        dispatch(showAlertModal("로그인이 필요한 서비스 입니다"));
      }
    }
  };

  useEffect(() => {
    checkIsValidLogin();
  }, []);

  return (
    <>{isValidLogin ? <Component /> : <CustomAlert redirect={redirectURL} />}</>
  );
};

export default Auth;
