import { STATIC_URL } from "@asset/constant";

const getUserLevelIcon = (userLevel: number) => {
  switch (userLevel) {
    case 1:
      return STATIC_URL.Level1_Icon;
    case 2:
      return STATIC_URL.Level2_Icon;
    case 3:
      return STATIC_URL.Level3_Icon;
    case 4:
      return STATIC_URL.Level4_Icon;
    case 5:
      return STATIC_URL.Level5_Icon;
  }
};

export default getUserLevelIcon;
