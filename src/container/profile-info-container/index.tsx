import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/modules";
import { getUserInfoAsync } from "@/modules/user";
import { MAX_LEVEL_POINT } from "./constants";
import CommonButton from "@component/buttons/common-button";
import getUserLevelIcon from "@common/lib/get-user-level-icon.ts";
import UpdateNicknameInput from "@/component/update-nickname-input/index";
import { updateUserNicknameAsync } from "@/modules/user";

import * as S from "./styles";

const ProfileInfoContainer = () => {
  const [updateNickname, setUpdateNickname] = useState(false);
  const { data } = useSelector((state: RootState) => state.user);
  const [userNickname, setUserNickname] = useState<string>(
    data ? data.name : ""
  );
  const dispatch = useDispatch();

  const toggleUpdateNickname = () => {
    setUpdateNickname(!updateNickname);
  };

  const nicknameOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserNickname(e.target.value);
  };
  const enterKeyHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      updateUserNickname();
    }
  };

  const updateUserNickname = () => {
    dispatch(updateUserNicknameAsync.request(userNickname));
    toggleUpdateNickname();
  };

  const getUserINfo = () => {
    dispatch(getUserInfoAsync.request());
  };

  useEffect(() => {
    getUserINfo();
  }, [dispatch]);

  return data ? (
    <S.ProfileInfoContainer>
      <S.UserInfoWrapper>
        <S.UserInfoContainer>
          <S.UserBasicInfoWrapper>
            <S.UserNameRow>
              {updateNickname ? (
                <>
                  <UpdateNicknameInput
                    defaultName={data.name}
                    onChangeHandler={nicknameOnChangeHandler}
                    onKeyUP={enterKeyHandler}
                  />
                  <CommonButton text={"취소"} onClick={toggleUpdateNickname} />
                  <CommonButton text={"저장"} onClick={updateUserNickname} />
                </>
              ) : (
                <>
                  <S.UserName>{data.name}</S.UserName>
                  <S.UpdateButtonContainer onClick={toggleUpdateNickname}>
                    <img src={"/src/asset/pencil.svg"}></img>
                  </S.UpdateButtonContainer>{" "}
                </>
              )}
            </S.UserNameRow>
            <S.UserEmail>{data.email}</S.UserEmail>
          </S.UserBasicInfoWrapper>
          <S.IconContainer>
            <S.LevelIcon
              src={getUserLevelIcon(data.level)}
              alt="Icon"
            ></S.LevelIcon>
          </S.IconContainer>
        </S.UserInfoContainer>
      </S.UserInfoWrapper>
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
