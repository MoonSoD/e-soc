import React, { FC } from "react";
import { EditSideBar, SideNav } from "@components";
import styled from "styled-components";
import { colors } from "@styles";
import { Toaster } from "react-hot-toast";
import { useUI } from "@hooks";
import { Input } from "@components/common/EditSideBar/EditSideBar";

const Layout = {
  Wrapper: styled.section`
    display: flex;
    flex-direction: row;
    z-index: -1;
    //filter: brightness(50%);
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

export const withLayout =
  (WrapperComponent: FC) =>
  (props: JSX.IntrinsicAttributes & { children?: React.ReactNode }) => {
    return (
      <>
        <Layout.Wrapper>
          <SideNav />
          <Layout.Main>
            <WrapperComponent {...props} />
          </Layout.Main>
        </Layout.Wrapper>
      </>
    );
  };
