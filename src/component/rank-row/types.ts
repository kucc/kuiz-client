import UserModel from "@/common/model/user";

export interface RankRowProps {
  rank: number;
  user: UserModel;
  isSelfRank: boolean;
}

export interface UserRankContainerProps {
  isSelfRank: boolean;
}
