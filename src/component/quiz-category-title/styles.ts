import styled from "styled-components";
import { THEME_COLOR } from "@asset/constant";

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 2rem;
  justify-content: center;
`;

export const Title = styled.div`
  display: block;
  font-size: 2.2rem;
  font-weight: bold;
  margin-top: 3rem;
  margin-bottom: 0.3rem;
  border-bottom: 0.3rem solid ${THEME_COLOR.PRIMARY};
`;
