import styled from "styled-components";
import { Link } from "react-router-dom";
import { THEME_COLOR, BREAKPOINT } from "@asset/constant";

export const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Option = styled.option`
  text-decoration: none;
  display: flex;
  width: 20rem;
  height: 4.5rem;
  background-color: ${(props) => props.color};
  margin-bottom: 2rem;
  font-size: 1.4rem;
  font-weight: bold;
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
  width: 70%;
  display: flex;
  margin-bottom: 2rem;
  justify-content: center;
  background-color: ${THEME_COLOR.GRAYER};
  margin: 4rem 0rem;
  padding: 4rem 4rem;
  border-radius: 3rem;
  @media only screen and (min-width: ${BREAKPOINT}px) {
    width: 30%;
  }
`;

export const Description = styled.div`
  display: block;
  font-size: 1.6rem;
  font-weight: bold;
  margin-top: 3rem;
  margin-bottom: 3rem;
  line-height: 2.5rem;
  /* letter-spacing: 0.1rem; */
`;

export const NextButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0rem;
  width: 50%;
`;

export const NextButton = styled.div`
  text-decoration: none;
  color: white;
  display: flex;
  width: 10rem;
  height: 3.5rem;
  background-color: ${THEME_COLOR.PRIMARY};
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
