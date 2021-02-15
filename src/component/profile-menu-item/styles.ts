import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProfileBorder = styled.div`
  width: 100%;
  height: 0.05rem;
  background-color: #666666;
`;

export const ProfileMenuItem = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 0.5rem;
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
  padding-left: 1rem;
`;

export const ProfileMenuCount = styled.div`
  color: #000000;
  font-size: 1.6rem;
  padding-right: 1rem;
`;
