import styled from "styled-components";
import { THEME_COLOR } from "@asset/constant";

export const ProfileMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30rem;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
`;
export const ProfileBorder = styled.div`
  width: 100%;
  height: 0.05rem;
  background-color: #666666;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 4rem;
  align-items: center;
  justify-content: center;
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