import React, { FC } from "react";
import { SideNav } from "@components";
import styled from "styled-components";
import { colors } from "@styles";

const Layout = {
  Wrapper: styled.section`
    display: flex;
    flex-direction: row;
  `,
  Main: styled.main`
    width: 100vw;
    min-height: 100vh;
    height: 100%;
    background-color: ${colors.lightGray};

    @media only screen and (min-width: 1024px) {
      width: calc(100vw - 15.625rem);
    }
  `,
};

export const withLayout = (WrapperComponent: FC, type?: "narrow" | "wide") => {
  return () => (
    <Layout.Wrapper>
      <SideNav />
      <Layout.Main>
        <WrapperComponent />
      </Layout.Main>
    </Layout.Wrapper>
  );
};
