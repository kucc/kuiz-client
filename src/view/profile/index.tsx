import React from "react";
import ProfileInfoContainer from "@/container/profile-info-container";
import ProfileMenuContainer from "@/container/profile-menu-container";
import * as S from "./styles";

const ProfilePage = () => {
  return (
    <S.ProfileContainer>
      <ProfileInfoContainer />
      <ProfileMenuContainer />
    </S.ProfileContainer>
  );
};

export default ProfilePage;
