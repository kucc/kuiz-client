import styled from "styled-components";
import { STATIC_URL, THEME_COLOR } from "@asset/constant";
export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  height: 100vh;
  position: relative;
  overflow-y: scroll;
  &:before {
    content: "";
    background-image: url(${STATIC_URL.BACKGROUND});
    background-position: center;
    background-size: cover;
    opacity: 0.3;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;

export const LayoutBorder = styled.div`
  width: 100%;
  height: 5px;
  display: flex;
  background-color: ${THEME_COLOR.PRIMARY};
`;

export const LayoutTop = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;

  > div {
    margin-bottom: 3rem;
  }
`;
