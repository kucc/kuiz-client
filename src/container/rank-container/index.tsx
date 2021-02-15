import userAPI from "@/common/lib/api/user";
import UserModel from "@/common/model/user";
import UserWithRankModel from "@/common/model/user-with-rank";
import LoadingSpinner from "@/component/common/loading-spinner";
import RankRow from "@/component/rank-row";
import TopRank from "@/component/top-rank";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { getRankListMokData } from "./mok-data";
import * as S from "./styles";

const RankContainer = () => {
  const [loading, setLoading] = useState(true);
  const [rankList, setRankList] = useState([] as UserModel[]);
  const [topThree, setTopThree] = useState([] as UserModel[]);
  const [userInfoWithRank, setUserInfoWithRank] = useState(
    {} as UserWithRankModel
  );
  const [{ accessToken }] = useCookies(["accessToken"]);

  const getRankList = async () => {
    const rankList = await getRankListMokData();
    setRankList(rankList);
    setLoading(false);
    const topThree = [...rankList].splice(0, 3);
    setTopThree(topThree);
  };

  const getUserInfoWithRank = async () => {
    if (accessToken) {
      const userInfoWithRank = await userAPI.getUserInfoWithRank();
      setUserInfoWithRank(userInfoWithRank);
    }
  };

  useEffect(() => {
    getRankList();
    getUserInfoWithRank();
  }, []);

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <S.TopThreeContainer>
            {topThree.splice(0, 3).map((user, idx) => (
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
    </>
  );
};

export default RankContainer;
