import GoogleLoginButton from "@component/buttons/login-button/google-button";
import KuccLoginButton from "@component/buttons/login-button/kucc-button";
import React, { useCallback, useEffect } from "react";
import Logo from "@component/logo";
import * as S from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/modules";
import { getUserInfoAsync } from "@/modules/user";

const LoginPage = () => {
  const dispatch = useDispatch();
  const { data: userData } = useSelector((state: RootState) => state.user);

  const redirect = useCallback(() => {
    if (userData) {
      window.location.href = "/";
    } else {
      dispatch(getUserInfoAsync.request());
    }
  }, [userData]);

  useEffect(() => {
    redirect();
  }, [userData]);

  return (
    <>
      <Logo />
      <S.ServiceTitle>KUCC Quiz</S.ServiceTitle>
      <S.LoginButtonContainer>
        <GoogleLoginButton />
        <KuccLoginButton />
      </S.LoginButtonContainer>
    </>
  );
};

export default LoginPage;
