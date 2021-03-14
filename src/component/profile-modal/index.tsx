import React, {useState} from "react";
import * as S from "./styles";
import { MAX_LEVEL_POINT, STATIC_URL } from "@/asset/constant";
import InputProps from "./types";

import Modal from "@component/common/modal"


const ProfileModal = (props: InputProps) => {

  const {
    showModal,
    setShowModal,
  } = props;

  const toggleModal = () => setShowModal(!showModal);

  return (
    <Modal show={showModal} onToggle={toggleModal}>
    <S.ModalContainer>
      <S.CancelIcon 
        src={STATIC_URL.CANCEL_ICON}
        alt="close"
        onClick={toggleModal}
      />
      <S.ModalTitle>레벨</S.ModalTitle>
      <S.LevelContainer>
        <S.LevelIcon src={STATIC_URL.Level1_Icon} alt="level1" />
        <S.LevelInfoContainer>
          <S.Level>Level 1</S.Level>
          <S.LevelDescription>당신은 아직 퀴즈 초보...</S.LevelDescription>
          <S.LevelDescription>필요 포인트 : <u>{MAX_LEVEL_POINT[1]}</u> P</S.LevelDescription>
        </S.LevelInfoContainer>
      </S.LevelContainer>
      <S.LevelContainer>
        <S.LevelIcon src={STATIC_URL.Level2_Icon} alt="level2" />
        <S.LevelInfoContainer>
          <S.Level>Level 2</S.Level>
          <S.LevelDescription>예선 정도는 통과할 수 있을 듯</S.LevelDescription>
          <S.LevelDescription>필요 포인트 : <u>{MAX_LEVEL_POINT[2]}</u> P</S.LevelDescription>
        </S.LevelInfoContainer>
      </S.LevelContainer>
      <S.LevelContainer>
        <S.LevelIcon src={STATIC_URL.Level3_Icon} alt="level3" />
        <S.LevelInfoContainer>
          <S.Level>Level 3</S.Level>
          <S.LevelDescription>퀴즈 좀 풀 줄 아는 놈인가?</S.LevelDescription>
          <S.LevelDescription>필요 포인트 : <u>{MAX_LEVEL_POINT[3]}</u> P</S.LevelDescription>
        </S.LevelInfoContainer>
      </S.LevelContainer>
      <S.LevelContainer>
        <S.LevelIcon src={STATIC_URL.Level4_Icon} alt="level4" />
        <S.LevelInfoContainer>
          <S.Level>Level 4</S.Level>
          <S.LevelDescription>왓슨이세요?</S.LevelDescription>
          <S.LevelDescription>필요 포인트 : <u>{MAX_LEVEL_POINT[4]}</u> P</S.LevelDescription>
        </S.LevelInfoContainer>
      </S.LevelContainer>
      <S.LevelContainer>
        <S.LevelIcon src={STATIC_URL.Level5_Icon} alt="level5" />
        <S.LevelInfoContainer>
          <S.Level>Level 5</S.Level>
          <S.LevelDescription>퀴즈의 신 달성!</S.LevelDescription>
          <S.LevelDescription>필요 포인트 : <u>{MAX_LEVEL_POINT[5]}</u> P</S.LevelDescription>
        </S.LevelInfoContainer>
      </S.LevelContainer>
    </S.ModalContainer>
  </Modal>
  );
}

export default ProfileModal;
