import styled from "styled-components";
import { BREAKPOINT, THEME_COLOR } from "@asset/constant";

export const RadioButton = styled.input`
  width: 2rem;
  height: 2rem;

  outline: none;
  border: 1px solid ${THEME_COLOR.GRAYER};
  border-radius: 1rem;
  background-color: ${(props) =>
    props.checked ? THEME_COLOR.PRIMARY : "white"};
`;