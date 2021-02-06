import React from "react";
import * as S from "./styles";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <S.Layout>
      <S.LayoutBorder />
      <S.LayoutContainer>{children}</S.LayoutContainer>
    </S.Layout>
  );
};

export default Layout;
