import endpoints from "@/common/endpoints";
import React from "react";
import * as S from "./styles";

const GoogleLoginButton = () => {
  const clickHandler = () => {
    window.location.href = `${endpoints.API_BASE_URL}/auth`;
  };

  return (
    <S.GoogleLoginButton onClick={clickHandler}>
      <S.logoImg src="/src/asset/google.png" />
      구글 아이디로 로그인
    </S.GoogleLoginButton>
  );
};

export default GoogleLoginButton;
