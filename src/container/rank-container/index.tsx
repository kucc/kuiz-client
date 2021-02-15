import UserModel from "@/common/model/user";
import RankRow from "@/component/rank-row";
import React, { useEffect, useState } from "react";
import { getRankListMokData } from "./mok-datat";
import * as S from "./styles";

const RankContainer = () => {
  const [rankList, setRankList] = useState([] as UserModel[]);

  console.log("ㅅㅂ");
  const getRankList = async () => {
    const rankList = await getRankListMokData();
    setRankList(rankList);
  };

  useEffect(() => {
    console.log(rankList);
    getRankList();
  }, [rankList]);

  return (
    <>
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
