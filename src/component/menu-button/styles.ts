import styled from "styled-components";
import { THEME_COLOR } from "@asset/constant";
import { Link } from "react-router-dom";

interface StartButtonProps {
  text: string;
  icon: string;
  color: string;
}

export const StartButton = styled.div`
  margin-bottom: 1.5rem;
  width: 100%;
  height: 100%;
  justify-content: space-between;
`;

export const StartButtonContainer = styled(Link)`
  display: flex;
  width: 20rem;
  height: 4rem;
  background-color: #5a5a66;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  text-decoration: none;
  &:hover {
    background-color: ${THEME_COLOR.PRIMARY};
    transform: scale(1.2) perspective(0.7rem);
  }
  &:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

export const ButtonText = styled.div`
  font-size: 1.4rem;
  padding-right: 4rem;
  justify-content: center;
  color: #fbfffb;
  font-weight: 500;
`;

export const ButtonIcon = styled.img`
  padding: 0.2rem;
  width: 2.7rem;
  height: 2.7rem;
  left: 1rem;
`;
export const StartButtonColumn1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 1rem;
`;
export const StartButtonColumn2 = styled.div`
  display: flex;
  width: 100%;

  justify-content: center;
  align-items: center;
  padding: 0rem 1rem;
`;
