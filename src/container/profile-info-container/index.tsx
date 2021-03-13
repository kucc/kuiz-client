import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/modules";
import { getUserInfoAsync } from "@/modules/user";
import { MAX_LEVEL_POINT } from "@asset/constant";
import CommonButton from "@component/buttons/common-button";
import getUserLevelIcon from "@common/lib/get-user-level-icon";
import UpdateNicknameInput from "@/component/update-nickname-input/index";
import { updateUserNicknameAsync } from "@/modules/user";
import ProfileModal from "@component/profile-modal";

import * as S from "./styles";

import { STATIC_URL } from "@/asset/constant";

import CustomAlert from "@/component/custom-alert";
import { showAlertModal } from "@/modules/modal";

const ProfileInfoContainer = () => {
  const [showModal, setShowModal] = useState(false);
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
    if (userNickname.length >= 10) {
      dispatch(showAlertModal("유저이름을 10글자 이하로 해주세요"));
      return;
    }
    dispatch(updateUserNicknameAsync.request(userNickname));
    toggleUpdateNickname();
  };

  const getUserINfo = () => {
    dispatch(getUserInfoAsync.request());
  };

  useEffect(() => {
    getUserINfo();
  }, [dispatch]);

  const toggleModal = () => setShowModal(!showModal);

  return (
    data && (
      <>
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
                      <CommonButton
                        text={"취소"}
                        onClick={toggleUpdateNickname}
                      />
                      <CommonButton
                        text={"저장"}
                        onClick={updateUserNickname}
                      />
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
          <S.PointBarContainer>
            <S.PointBarWrapper>
              <S.PointInfoWrapper>
                <S.UserPoint> {data.point} P</S.UserPoint>
                <S.HelpIcon
                  src={STATIC_URL.QUESTION_MARK}
                  alt="question_mark"
                  onClick={toggleModal}
                />
              </S.PointInfoWrapper>
                <S.BackgroundBar>
                  <S.PointBar
                    width={(data.point * 100) / MAX_LEVEL_POINT[data.level]}
                  />
                </S.BackgroundBar>
            </S.PointBarWrapper>
            <S.Point>
              ( {data.point} / {MAX_LEVEL_POINT[data.level]} )
            </S.Point>
          <ProfileModal 
            showModal={showModal}
            setShowModal={setShowModal}
          />
          </S.PointBarContainer>
        </S.ProfileInfoContainer>
        <CustomAlert />
    </>
    )
  );
};

export default ProfileInfoContainer;
