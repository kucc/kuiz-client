import React from "react";
import ProfileMenuItem from "@/component/profile-menu-item";
import * as S from "./styles";
import CommonButton from "../../component/buttons/common-button";
import endpoints from "../../common/endpoints";

const ProfileMenuContainer = () => {
  const clickHandler = async () => {
    window.location.href = `${endpoints.API_BASE_URL}/auth/logout`;
  };
  return (
    <S.ProfileMenuContainer>
      <S.ProfileBorder />
      <ProfileMenuItem title="내가 만든 문제집" relation="owner" bool={true} />
      <S.ProfileBorder />
      <ProfileMenuItem
        title="내가 만들고 있는 문제집"
        relation="owner"
        bool={false}
      />
      <S.ProfileBorder />
      <ProfileMenuItem title="내가 푼 문제집" relation="solving" bool={false} />
      <S.ProfileBorder />
      <ProfileMenuItem
        title="내가 풀고 있는 문제집"
        relation="solving"
        bool={true}
      />
      <S.ProfileBorder />
      <S.ButtonWrapper>
        <CommonButton onClick={clickHandler} text="로그아웃" />
      </S.ButtonWrapper>
    </S.ProfileMenuContainer>
  );
};

export default ProfileMenuContainer;
