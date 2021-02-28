import styled from "styled-components";
import { THEME_COLOR } from "@asset/constant";
import DropDownProps from "./types";

export const DropDown = styled.div`
  display: ${(props: DropDownProps) => (props.show ? "flex" : "none")};
  justify-content: flex-end;
  position: relative;
`;

export const DropDownOptionContainer = styled.div`
  width: 16rem;
  background-color: white;
  box-shadow: 0rem 0.8rem 1.6rem 0rem rgba(0, 0, 0, 0.2);
  font-size: 1.5rem;
  border: 1px solid ${THEME_COLOR.GRAYER};
  position: absolute;
  z-index: 1;
`;

export const DropDownOption = styled.div`
  color: black;
  height: 4rem;
  justify-content: center;
  padding: 1.5rem;
  display: block;

  &:hover {
    background-color: #dddddd;
    cursor: pointer;
  }
`;
