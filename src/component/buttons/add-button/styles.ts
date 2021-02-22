import styled from "styled-components";
import { THEME_COLOR } from "@asset/constant";
import { Link } from "react-router-dom";

export const AddButton = styled.div`
  display: flex;

  width: 80%;
  height: 6rem;
`;
export const AddButtonContainer = styled(Link)`
  display: flex;
  width: 100%;

  border: solid 1.5px transparent;
  border-color: gray;
  border-style: dashed;
  border-radius: 0.7rem;

  color: darkgray;
  background-color: white;

  align-items: center;
  justify-content: center;

  text-decoration: none;
`;
export const ButtonText = styled.div`
  font-size: 1.4rem;

  display: flex;
  justify-content: center;
  align-items: center;
  color: darkgray;
  font-weight: 500;
`;

export const ButtonIcon = styled.img`
  padding: 0.2rem;
  width: 2.7rem;
  height: 2.7rem;
  left: 1rem;
`;
