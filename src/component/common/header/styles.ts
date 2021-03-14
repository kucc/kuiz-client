import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import { BREAKPOINT } from "@asset/constant";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  min-width: 400px;
  height: 6rem;
  background-color: white;
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
  width: 3rem;
  height: 3rem;
`;

export const MobileProfileImg = styled.img`
  width: 2rem;
  height: 2rem;
`;

export const DesktopDivLink = styled.div`
  text-decoration: none;
  color: inherit;

  display: none;
  @media only screen and (min-width: ${BREAKPOINT}px) {
    display: block;
  }
`;

export const MobileDivLink = styled.div`
  text-decoration: none;
  color: inherit;

  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: ${BREAKPOINT}px) {
    display: none;
  }
`;
