import { STATIC_URL } from "@/asset/constant";
import React from "react";
import * as S from "./styles";
import { TopRankProps } from "./types";

const TopRank = ({ user, rank }: TopRankProps) => {
  const getUserMedalImg = (rank: number) => {
    switch (rank) {
      case 1:
        return STATIC_URL.GOLD_MEDAL;
      case 2:
        return STATIC_URL.SILVER_MEDAL;
      case 3:
        return STATIC_URL.BRONZE_MEDAL;
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
