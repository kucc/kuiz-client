import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { STATIC_URL } from "../../asset/constant";
import ProfileMenuItem from "../../component/profile-menu-item";
import { RootState } from "../../modules";
import { getUserInfoAsync } from "../../modules/user";
import { MAX_LEVEL_POINT } from "./constants";
import * as S from "./styles";

const ProfileContainer = () => {
  const { data, loading, error } = useSelector(
    (state: RootState) => state.userReducer
  );

  const dispatch = useDispatch();

  const getUserINfo = () => {
    dispatch(getUserInfoAsync.request());
  };

  useEffect(() => {
    getUserINfo();
  }, [dispatch]);

  const userName = data?.name;
  const userEmail = data?.email;
  const userPoint = data?.point;
  const userLevel = data?.level;

  const findLevelIcon = (level: number) => {
    const queryIcon = "Level" + String(level) + "_Icon";
    return STATIC_URL[queryIcon];
  };
  const maxPoint = userLevel ? MAX_LEVEL_POINT[userLevel] : 150;

  return (
    <S.ProfileContainer>
      <S.ProfileInfoContainer>
        <S.UserInfoContainer>
          <S.UserBasicInfoWrapper>
            <S.UserName>{userName ? userName : "이름"}</S.UserName>
            <S.UserEmail>{userEmail ? userEmail : "이메일"}</S.UserEmail>
          </S.UserBasicInfoWrapper>
          <S.UserLevelWrapper>
            <S.LevelLogo
              src={
                userLevel ? findLevelIcon(userLevel) : STATIC_URL.Level1_Icon
              }
              alt="Icon"
            ></S.LevelLogo>
          </S.UserLevelWrapper>
        </S.UserInfoContainer>
        <S.ProfilePointBarContainer>
          <S.PointBarWrapper>
            <S.UserPoint> {userPoint ? userPoint : "포인트"} P</S.UserPoint>
            <S.BackgroundBar>
              <S.PointBar
                width={userPoint ? (userPoint * 100) / maxPoint : 0}
              />
            </S.BackgroundBar>
          </S.PointBarWrapper>
          <S.Point>
            ( {userPoint ? userPoint : "포인트"} / {maxPoint} )
          </S.Point>
        </S.ProfilePointBarContainer>
      </S.ProfileInfoContainer>
      <S.ProfileMenuContainer>
        <S.ProfileBorder />
        <ProfileMenuItem
          title="내가 만든 문제집 목록"
          count={1}
          relation="owner"
          bool={true}
        />
        <S.ProfileBorder />
        <ProfileMenuItem
          title="내가 만들고 있는 문제집 목록"
          count={1}
          relation="owner"
          bool={false}
        />
        <S.ProfileBorder />
        <ProfileMenuItem
          title="내가 푼 문제집 목록"
          count={1}
          relation="solving"
          bool={false}
        />
        <S.ProfileBorder />
        <ProfileMenuItem
          title="내가 풀고 있는 문제집 목록"
          count={1}
          relation="solving"
          bool={true}
        />
        <S.ProfileBorder />
      </S.ProfileMenuContainer>
    </S.ProfileContainer>
  );
};

export default ProfileContainer;
