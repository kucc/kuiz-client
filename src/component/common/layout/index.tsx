import React from "react";
import * as S from "./styles";
import Header from "../header";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <S.Layout>
      <S.LayoutTop>
        <S.LayoutBorder />
        <Header />
      </S.LayoutTop>
      <S.LayoutContainer>{children}</S.LayoutContainer>
    </S.Layout>
  );
};

export default Layout;
