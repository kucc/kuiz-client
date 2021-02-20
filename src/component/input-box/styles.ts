import styled from "styled-components";
import { THEME_COLOR } from "@asset/constant";
import { Link } from "react-router-dom";

export const InputBox = styled.input`
  width: 100%;
  font-size: 1.4rem;
  height: 4rem;

  outline: none;
  border: 1px solid ${THEME_COLOR.GRAYER};

  border-radius: 0.7rem;

  padding: 0.8rem 1rem;
`;
