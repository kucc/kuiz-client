import React from "react";
import ProfileMenuItem from "@/component/profile-menu-item";
import * as S from "./styles";
import {
  USER_MADE_QUIZBOOK_MENU,
  USER_MAKING_QUIZBOOK_MENU,
  USER_SOLVED_QUIZBOOK_MENU,
  USER_SOLVING_QUIZBOOK_MENU,
} from "@/asset/constant";

const ProfileMenuContainer = () => {
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
    </S.ProfileMenuContainer>
  );
};

export default ProfileMenuContainer;
