import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { STATIC_URL } from "../../asset/constant";
import { RootState } from "../../modules";
import { getUserInfoAsync } from "../../modules/user";
import { MAX_LEVEL_POINT } from "./constants";
import * as S from "./styles";

const ProfileInfoContainer = () => {
  const { loading, error, data } = useSelector(
    (state: RootState) => state.user
  );

  const dispatch = useDispatch();

  const getUserINfo = () => {
    dispatch(getUserInfoAsync.request());
  };

  useEffect(() => {
    getUserINfo();
  }, [dispatch]);

  const { name, email, point, level } = data
    ? data
    : { name: "", email: "", point: 0, level: 1 };

  const findLevelIcon = (level: number) => {
    const queryIcon = "Level" + String(level) + "_Icon";
    return STATIC_URL[queryIcon];
  };
  const maxPoint = level ? MAX_LEVEL_POINT[level] : MAX_LEVEL_POINT[1];

  return (
    <S.ProfileInfoContainer>
      <S.UserInfoContainer>
        <S.UserBasicInfoWrapper>
          <S.UserName>{name ? name : "이름"}</S.UserName>
          <S.UserEmail>{email ? email : "이메일"}</S.UserEmail>
        </S.UserBasicInfoWrapper>
        <S.UserLevelWrapper>
          <S.LevelLogo
            src={level ? findLevelIcon(level) : STATIC_URL.Level1_Icon}
            alt="Icon"
          ></S.LevelLogo>
        </S.UserLevelWrapper>
      </S.UserInfoContainer>
      <S.ProfilePointBarContainer>
        <S.PointBarWrapper>
          <S.UserPoint> {point ? point : "포인트"} P</S.UserPoint>
          <S.BackgroundBar>
            <S.PointBar width={point ? (point * 100) / maxPoint : 0} />
          </S.BackgroundBar>
        </S.PointBarWrapper>
        <S.Point>
          ( {point ? point : "포인트"} / {maxPoint} )
        </S.Point>
      </S.ProfilePointBarContainer>
    </S.ProfileInfoContainer>
  );
};

export default ProfileInfoContainer;
