import { STATIC_URL } from "@/asset/constant";
import React from "react";
import * as S from "./styles";

const Header = () => {
  return (
    <S.Header>
      <S.DesktopLink to="/">
        <S.DesktopLogo src={STATIC_URL.LOGO} alt="logo"></S.DesktopLogo>
      </S.DesktopLink>
      <S.MobileLink to="/">
        <S.MobileLogo src={STATIC_URL.LOGO_WITHOUT_TEXT} alt="logo"></S.MobileLogo>
      </S.MobileLink>

      <S.DesktopLink to="/profile">
        <S.DesktopProfileImg src={STATIC_URL.PROFILE} alt="profile"/>
      </S.DesktopLink>

      <S.MobileLink to="/profile">
        <S.MobileProfileImg src={STATIC_URL.PROFILE} alt="profile"/>
      </S.MobileLink>
    </S.Header>
  );
};

export default Header;
