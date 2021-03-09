import styled from "styled-components";
import { THEME_COLOR } from "@asset/constant";
import { Link } from "react-router-dom";

export const NextButton = styled.div`
  margin-bottom: 1.5rem;
  width: 100%;
  height: 100%;
`;

export const NextButtonContainer = styled.button`
  display: flex;
  width: 10rem;
  height: 4rem;
  background-color: ${THEME_COLOR.PRIMARY};

  align-items: center;
  justify-content: center;
  border-radius: 10px;
  text-decoration: none;
`;

export const ButtonText = styled.div`
  font-size: 1.4rem;

  display: flex;
  justify-content: center;
  align-items: center;
  color: #fbfffb;
  font-weight: 500;
`;

export const ButtonIcon = styled.img`
  padding: 0.2rem;
  width: 2.7rem;
  height: 2.7rem;
  left: 1rem;
`;
