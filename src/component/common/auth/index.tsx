/* eslint-disable react/display-name */
import React, { FC, useEffect } from "react";
import userAPI from "@/common/lib/api/user";
import { insetUserInfo } from "@/modules/user";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import CustomAlert from "@component/custom-alert";
import { showAlertModal } from "@/modules/modal";

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
          dispatch(showAlertModal("kucc 회원에게만 허용된 페이지 입니다"));
        }
      } catch (e) {
        history.push("/login");
      }
    }
  };

  useEffect(() => {
    checkIsValidLogin();
  }, []);

  return (
    <>
      <Component /> <CustomAlert />
    </>
  );
};

export default Auth;
