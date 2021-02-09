import endpoints from "@/common/endpoints";
import React from "react";
import * as S from "./styles";

const KuccLoginButton = () => {
  const clickHandler = () => {
    window.location.href = `${endpoints.API_BASE_URL}/auth/kucc`;
  };

  return (
    <S.KuccLoginButton onClick={clickHandler}>
      <S.logoImg src="/src/asset/logo.png" />
      kucc 아이디로 로그인
    </S.KuccLoginButton>
  );
};

export default KuccLoginButton;
