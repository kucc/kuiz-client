import React from "react";
import MenuButton from "../menu-button/index";
import { STATIC_URL } from "../../asset/constant";
import * as S from "./styles";

const MenuButtons = () => {
  return (
    <S.ButtonsContainer>
      <MenuButton
        color="#595965"
        link={"/category"}
        icon={STATIC_URL.PLAYBUTTON}
        text="플레이"
      />
      <MenuButton
        color="#595965"
        link={"/rank"}
        icon={STATIC_URL.Trophy}
        text="랭킹"
      />
      <MenuButton
        color="#595965"
        link={"/profile"}
        icon={STATIC_URL.PROFILE}
        text="프로필"
      />
      <MenuButton
        color="#595965"
        link={"game"}
        icon={STATIC_URL.MINIGAME}
        text="문제집 만들기"
      />
    </S.ButtonsContainer>
  );
};

export default MenuButtons;
