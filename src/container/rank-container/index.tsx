import userAPI from "@/common/lib/api/user";
import UserModel from "@/common/model/user";
import UserWithRankModel from "@/common/model/user-with-rank";
import RankRow from "@/component/rank-row";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { getRankListMokData } from "./mok-datat";
import * as S from "./styles";

const RankContainer = () => {
  const [rankList, setRankList] = useState([] as UserModel[]);
  const [userInfoWithRank, setUserInfoWithRank] = useState(
    {} as UserWithRankModel
  );
  const [authCookie] = useCookies(["accessToken"]);

  const getRankList = async () => {
    const rankList = await getRankListMokData();
    setRankList(rankList);
  };

  const getUserInfoWithRank = async () => {
    if (authCookie) {
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
      <S.SelfRankContainer>
        <RankRow
          user={userInfoWithRank}
          isSelfRank
          rank={userInfoWithRank.rank}
        />
      </S.SelfRankContainer>
      <S.TotalRankContainer>
        {rankList.map((user, idx) => {
          return (
            <RankRow
              key={`rank${idx}`}
              user={user}
              isSelfRank={false}
              rank={idx + 1}
            />
          );
        })}
      </S.TotalRankContainer>
    </>
  );
};

export default RankContainer;
