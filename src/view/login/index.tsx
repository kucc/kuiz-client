import GoogleLoginButton from "@component/buttons/login-button/google-button";
import KuccLoginButton from "@component/buttons/login-button/kucc-button";
import React from "react";
import Logo from "@component/logo";
import Layout from "@component/common/layout";
import * as S from "./styles";

const LoginPage = () => {
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
