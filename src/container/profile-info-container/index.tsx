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

  const findLevelIcon = (level: number) => {
    const queryIcon = "Level" + String(level) + "_Icon";
    return STATIC_URL[queryIcon];
  };

  return data ? (
    <S.ProfileInfoContainer>
      <S.UserInfoContainer>
        <S.UserBasicInfoWrapper>
          <S.UserName>{data.name}</S.UserName>
          <S.UserEmail>{data.email}</S.UserEmail>
        </S.UserBasicInfoWrapper>
        <S.UserLevelWrapper>
          <S.LevelLogo src={findLevelIcon(data.level)} alt="Icon"></S.LevelLogo>
        </S.UserLevelWrapper>
      </S.UserInfoContainer>
      <S.ProfilePointBarContainer>
        <S.PointBarWrapper>
          <S.UserPoint> {data.point} P</S.UserPoint>
          <S.BackgroundBar>
            <S.PointBar
              width={(data.point * 100) / MAX_LEVEL_POINT[data.level]}
            />
          </S.BackgroundBar>
        </S.PointBarWrapper>
        <S.Point>
          ( {data.point} / {MAX_LEVEL_POINT[data.level]} )
        </S.Point>
      </S.ProfilePointBarContainer>
    </S.ProfileInfoContainer>
  ) : (
    <></>
  );
};

export default ProfileInfoContainer;
