import styled from "styled-components";
import { THEME_COLOR } from "@asset/constant";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const MultipleChoiceInputBox = styled.input`
  width: 100%;
  font-size: 1.4rem;
  height: 4rem;

  outline: none;
  border: 1px solid ${THEME_COLOR.GRAYER};

  border-radius: 0.7rem;

  padding: 0.8rem 1rem;
  margin: 0.4rem;
`;

export const CheckBox = styled.input`
  width: 2rem;
  height: 2rem;

  outline: none;
  border: 1px solid ${THEME_COLOR.GRAYER};
  border-radius: 1rem;
  background-color: ${(props) =>
    props.checked ? THEME_COLOR.PRIMARY : "white"};
`;
