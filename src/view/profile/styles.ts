import styled from "styled-components";
import { BREAKPOINT } from "@asset/constant";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 70%;
  height: 100%;

  margin-top: 2rem;
  padding: 3rem 0rem;
  background-color: white;
  border-radius: 0.5rem;

  justify-content: center;
  align-items: center;

  @media only screen and (min-width: ${BREAKPOINT}px) {
    width: 50%;
    padding: 0rem 5rem;
  }
`;
