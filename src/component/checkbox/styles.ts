import styled from "styled-components";
import { THEME_COLOR } from "@asset/constant";

export const CheckBox = styled.input`
  width: 3rem;
  height: 3rem;

  margin-left: 0.5rem;
  outline: none;
  border: 1px solid ${THEME_COLOR.GRAYER};
  border-radius: 1rem;
  background-color: ${(props) =>
    props.checked ? THEME_COLOR.PRIMARY : "white"};
`;
