import { STATIC_URL } from "@/asset/constant";
import React from "react";
import * as S from "./styles";
import { TopRankProps } from "./types";

const TopRank = ({ user, rank }: TopRankProps) => {
  const getUserMedalImg = (rank: number) => {
    switch (rank) {
      case 1:
        return STATIC_URL.Gold_Medal;
      case 2:
        return STATIC_URL.Silver_Medal;
      case 3:
        return STATIC_URL.Bronze_Medal;
    }
  };

  return (
    <S.MedalColumn>
      <S.MedalLog src={getUserMedalImg(rank)} />
      <S.TopUserNameContainer>
        <S.TopUserName>{user.name}</S.TopUserName>
      </S.TopUserNameContainer>
    </S.MedalColumn>
  );
};

export default TopRank;
