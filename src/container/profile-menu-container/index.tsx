import React from "react";
import ProfileMenuItem from "@/component/profile-menu-item";
import CommonButton from "@/component/buttons/common-button";
import endpoints from "@/common/endpoints";
import {
  USER_MADE_QUIZBOOK_MENU,
  USER_MAKING_QUIZBOOK_MENU,
  USER_SOLVED_QUIZBOOK_MENU,
  USER_SOLVING_QUIZBOOK_MENU,
} from "@/asset/constant";
import * as S from "./styles";

const ProfileMenuContainer = () => {
  const clickHandler = async () => {
    window.location.href = `${endpoints.API_BASE_URL}/auth/logout`;
  };
  return (
    <S.ProfileMenuContainer>
      <S.ProfileBorder />
      <ProfileMenuItem
        title={USER_MADE_QUIZBOOK_MENU}
        relation="owner"
        bool={true}
      />
      <S.ProfileBorder />
      <ProfileMenuItem
        title={USER_MAKING_QUIZBOOK_MENU}
        relation="owner"
        bool={false}
      />
      <S.ProfileBorder />
      <ProfileMenuItem
        title={USER_SOLVED_QUIZBOOK_MENU}
        relation="solving"
        bool={true}
      />
      <S.ProfileBorder />
      <ProfileMenuItem
        title={USER_SOLVING_QUIZBOOK_MENU}
        relation="solving"
        bool={false}
      />
      <S.ProfileBorder />
      <S.ButtonWrapper>
        <CommonButton onClick={clickHandler} text="로그아웃" />
      </S.ButtonWrapper>
    </S.ProfileMenuContainer>
  );
};

export default ProfileMenuContainer;
