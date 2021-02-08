import { Link } from 'react-router-dom';
import styled from "styled-components/macro";
import { THEME_COLOR } from "@asset/constant";
import {BREAKPOINT} from "@asset/constant"


export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 6rem;

  padding: 0rem 2rem;
  @media only screen and (min-width: ${BREAKPOINT}px) {
    height: 10rem;
    padding: 0rem 5rem;
  }
`;

export const DesktopLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  display: none;
  @media only screen and (min-width: ${BREAKPOINT}px) {
    display: block;
  }
`;

export const MobileLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: ${BREAKPOINT}px) {
    display: none;
  }
`;

export const DesktopLogo = styled.img`
  display: none;
  @media only screen and (min-width: ${BREAKPOINT}px) {
    display: block;
    width: 15rem;
  }
`;

export const MobileLogo = styled.img`
width: 9rem;
@media only screen and (min-width: ${BREAKPOINT}px) {
  display: none;
}
`;

export const DesktopProfileImg = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: 1px solid ${THEME_COLOR.GRAYER};
`;

export const MobileProfileImg = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: 1px solid ${THEME_COLOR.GRAYER};
`;
