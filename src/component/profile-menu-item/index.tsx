import React from "react";
import * as S from "./styles";
import { ProfileMenuItemProps } from "./types";

const ProfileMenuItem = (menu: ProfileMenuItemProps) => {
  return (
    <S.ProfileMenuItem>
      <S.ProfileMenuItemWrapper
        to={`/quiz-book/user/${menu.relation}?isDone=${menu.bool}`}
      >
        <S.ProfileMenuTitle>{menu.title}</S.ProfileMenuTitle>
      </S.ProfileMenuItemWrapper>
    </S.ProfileMenuItem>
  );
};
export default ProfileMenuItem;
