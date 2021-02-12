import styled from "styled-components";
import { Link } from "react-router-dom";
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

export const DescriptionContainer = styled.div`
  width: 30rem;
  display: flex;
  margin-bottom: 2rem;
  justify-content: center;
`;

export const Description = styled.div`
  display: block;
  font-size: 1.8rem;
  font-weight: bold;
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

export const NextButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NextButton = styled.div`
  text-decoration: none;
  color: white;
  display: flex;
  width: 10rem;
  height: 3.5rem;
  background-color: ${THEME_COLOR.PRIMARY};
  /* margin-bottom: 2rem; */
  font-size: 1.4rem;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  &:hover {
    background-color: ${THEME_COLOR.PRIMARY};
  }
  &:active {
    transform: translateY(-1px);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  }
`;
