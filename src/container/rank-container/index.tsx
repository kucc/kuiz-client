import { RANK_LIST_COUNT } from "@/asset/constant";
import rankAPI from "@/common/lib/api/rank";
import userAPI from "@/common/lib/api/user";
import UserModel from "@/common/model/user";
import UserWithRankModel from "@/common/model/user-with-rank";
import LoadingSpinner from "@/component/common/loading-spinner";
import RankRow from "@/component/rank-row";
import TopRank from "@/component/top-rank";
import React, { useCallback, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import * as S from "./styles";

const RankContainer = () => {
  const [loading, setLoading] = useState(true);
  const [rankList, setRankList] = useState([] as UserModel[]);
  const [topThree, setTopThree] = useState([] as UserModel[]);
  const [userInfoWithRank, setUserInfoWithRank] = useState(
    {} as UserWithRankModel
  );
  const [{ accessToken }] = useCookies(["accessToken"]);

  const getRankList = useCallback(async () => {
    const rankData = await rankAPI.getRanking(1, RANK_LIST_COUNT);
    setRankList(rankData);
    const topThree = [...rankData].splice(0, 3);
    setTopThree(topThree);
    setLoading(false);
  }, []);

  const getUserInfoWithRank = useCallback(async () => {
    if (accessToken) {
      const userInfoWithRank = await userAPI.getUserInfoWithRank();
      setUserInfoWithRank(userInfoWithRank);
    }
  }, [accessToken]);

  useEffect(() => {
    getRankList();
    getUserInfoWithRank();
  }, []);

  return (
    <S.RankWrapper>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <S.TopThreeContainer>
            {topThree.map((user, idx) => (
              <TopRank key={`top${idx}`} user={user} rank={idx + 1} />
            ))}
          </S.TopThreeContainer>
          {accessToken && (
            <S.SelfRankContainer>
              <RankRow
                user={userInfoWithRank}
                isSelfRank
                rank={userInfoWithRank.rank}
              />
            </S.SelfRankContainer>
          )}
          <S.TotalRankContainer>
            {rankList.map((user, idx) => (
              <RankRow
                key={`rank${idx}`}
                user={user}
                isSelfRank={false}
                rank={idx + 1}
              />
            ))}
          </S.TotalRankContainer>
        </>
      )}
    </S.RankWrapper>
  );
};

export default RankContainer;
