import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { STATIC_URL } from "@/asset/constant";
import { RootState } from "@/modules";
import { getUserInfoAsync } from "@/modules/user";
import { MAX_LEVEL_POINT } from "./constants";
import getUserLevelIcon from "@common/lib/get-user-level-icon.ts";
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

  return data ? (
    <S.ProfileInfoContainer>
      <S.UserInfoContainer>
        <S.UserInfoWrapper>
          <S.UserNameContainer>
            <S.UserName>{data.name}</S.UserName>
          </S.UserNameContainer>
          <S.UserEmail>{data.email}</S.UserEmail>
        </S.UserInfoWrapper>
        <S.IconContainer>
          <S.LevelIcon
            src={getUserLevelIcon(data.level)}
            alt="Icon"
          ></S.LevelIcon>
        </S.IconContainer>
      </S.UserInfoContainer>
      <S.PointBarContainer>
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
      </S.PointBarContainer>
    </S.ProfileInfoContainer>
  ) : (
    <></>
  );
};

export default ProfileInfoContainer;
