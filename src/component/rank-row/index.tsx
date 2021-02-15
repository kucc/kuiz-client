import React from "react";
import * as S from "./styles";
import { STATIC_URL } from "@asset/constant";
import { RankRowProps } from "./types";

const RankRow = ({ rank, user, isSelfRank }: RankRowProps) => {
  return (
    <S.UserRankContainer isSelfRank={isSelfRank}>
      <S.RankNumberColumn>
        <S.RankText>{rank}</S.RankText>
      </S.RankNumberColumn>
      <S.RankIconColumn>
        <S.RankIcon src={STATIC_URL.Level4_Icon} />
      </S.RankIconColumn>
      <S.RankUserNameColumn>
        <S.UserName>{user.name}</S.UserName>
      </S.RankUserNameColumn>
      <S.RankPointColumn>
        <S.UserPoint>{user.point}</S.UserPoint>
      </S.RankPointColumn>
      <S.RankCoinColumn>
        <S.PointImg src={STATIC_URL.Coin} />
      </S.RankCoinColumn>
    </S.UserRankContainer>
  );
};

export default RankRow;
