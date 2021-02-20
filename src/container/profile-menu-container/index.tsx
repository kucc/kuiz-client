import React from "react";
import ProfileMenuItem from "../../component/profile-menu-item";
import * as S from "./styles";

const ProfileMenuContainer = () => {
  return (
    <S.ProfileMenuContainer>
      <S.ProfileBorder />
      <ProfileMenuItem
        title="내가 만든 문제집 목록"
        relation="owner"
        bool={true}
      />
      <S.ProfileBorder />
      <ProfileMenuItem
        title="내가 만들고 있는 문제집 목록"
        relation="owner"
        bool={false}
      />
      <S.ProfileBorder />
      <ProfileMenuItem
        title="내가 푼 문제집 목록"
        relation="solving"
        bool={false}
      />
      <S.ProfileBorder />
      <ProfileMenuItem
        title="내가 풀고 있는 문제집 목록"
        relation="solving"
        bool={true}
      />
      <S.ProfileBorder />
    </S.ProfileMenuContainer>
  );
};

export default ProfileMenuContainer;
