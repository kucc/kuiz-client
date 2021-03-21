import styled from "styled-components";
import { BREAKPOINT } from "@asset/constant";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  padding: 1rem 2rem;
  background-color: white;

  @media only screen and (min-width: ${BREAKPOINT}px) {
    width: 50%;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
