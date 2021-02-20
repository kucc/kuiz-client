import React from "react";
import MenuButton from "../buttons/menu-button/index";
import { STATIC_URL } from "@asset/constant";
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
<<<<<<< HEAD
<<<<<<< HEAD
        link={"/quiz-book"}
=======
        link={"/quiz-book/1/makequiz"}
>>>>>>> 899137b84e1f9dbda5aed1826e8910598ed7554d
=======
        link={"/quiz-book"}
>>>>>>> d92e6d6a28980bf352297f77336b821bbe3ba5f3
        icon={STATIC_URL.MINIGAME}
        text="문제집 만들기"
      />
    </S.ButtonsContainer>
  );
};

export default MenuButtons;
