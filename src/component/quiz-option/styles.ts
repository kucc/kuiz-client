import styled from "styled-components";
import { THEME_COLOR } from "@asset/constant";

export const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Option = styled.option`
  text-decoration: none;
  display: flex;
  width: 20rem;
  height: 4.3rem;
  background-color: ${(props) => props.color};
  margin-bottom: 2rem;
  font-size: 1.4rem;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  &:hover {
    background-color: ${(props) => !props.disabled && "#c4c4c4"};
  }
  &:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
`;
