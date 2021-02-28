import { MAX_BREAKPOINT } from "@/asset/constant";
import styled from "styled-components";

export const UserQuizBookWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 50%;
  min-width: 35rem;
  min-height: 70vh;
  padding-bottom: 3rem;
  background-color: white;
  border-radius: 10px;
`;
export const UserQuizBookContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const UserQuizBookTitle = styled.div`
  top: 0;
  margin: 5% 0;
  font-size: 2rem;
  font-weight: bold;
  border-bottom: 1px solid black;
  width: 40%;
  min-width: 20rem;
  text-align: center;
  white-space: nowrap;
`;

export const NoUserQuizBook = styled.p`
  font-size: 1.2rem;
`;
