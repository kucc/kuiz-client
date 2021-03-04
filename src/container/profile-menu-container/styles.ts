import styled from "styled-components";
import { THEME_COLOR } from "@asset/constant";

export const ProfileMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
export const ProfileBorder = styled.div`
  width: 50%;
  height: 0.05rem;
  background-color: #666666;
`;

export const ButtonWrapper = styled.div`
  width: 10%;
  margin-top: 3rem;
`;

export const LogoutButton = styled.button`
  width: 10rem;
  height: 3rem;
  background-color: ${THEME_COLOR.PRIMARY};
  border-radius: 10px;
  color: #fbfffb;
  font-weight: 500;
  border: none;
  cursor: pointer;
`;