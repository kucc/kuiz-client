import styled from "styled-components";
import { STATIC_URL, THEME_COLOR } from "@asset/constant";
export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  height: 100vh;
  background-image: url(${STATIC_URL.BACKGROUND});
  background-position: center;
  background-size: cover;
`;

export const LayoutBorder = styled.div`
  width: 100%;
  height: 5px;
  background-color: ${THEME_COLOR.PRIMARY};
`;

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 6rem;
  align-items: center;
  justify-content: center;
`;
