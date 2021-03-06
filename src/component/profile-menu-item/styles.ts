import styled from "styled-components";
import { Link } from "react-router-dom";
import { THEME_COLOR } from "@asset/constant";

export const ProfileBorder = styled.div`
  width: 100%;
  height: 0.05rem;
  background-color: #666666;
`;

export const ProfileMenuItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* margin-bottom: 0.5rem; */
`;

export const ProfileMenuItemWrapper = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 5rem;
`;

export const ProfileMenuTitle = styled.div`
  color: #000000;
  font-size: 1.6rem;
  &:hover {
    color: ${THEME_COLOR.PRIMARY};
  }
`;
