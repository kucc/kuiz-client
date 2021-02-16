import UserModel from "@/common/model/user";

export interface RankRowProps {
  rank: number;
  user: UserModel;
  isSelfRank: Boolean;
}

export interface UserRankContainerProps {
  isSelfRank: Boolean;
}
