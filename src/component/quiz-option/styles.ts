import styled from "styled-components";
import { THEME_COLOR } from "@asset/constant";

export const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Option = styled.div`
  text-decoration: none;
  display: flex;
  width: 20rem;
  height: 4.3rem;
  background-color: ${THEME_COLOR.GRAY};
  margin-bottom: 2rem;
  font-size: 1.4rem;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  &:hover {
    background-color: ${THEME_COLOR.PRIMARY};
    transform: scale(1.2) perspective(0.7rem);
  }
  &:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
`;
