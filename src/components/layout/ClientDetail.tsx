import React, { FC } from "react";
import { PageCard, ProfilePill, TabNav, TopNav } from "@components";
import styled from "styled-components";

interface Props {
  client: string;
}

const Styled = {
  Wrapper: styled.section`
    min-height: calc(100vh - 8.5rem);
    background-color: #fff;
  `,
};

export const ClientDetail: FC<Props> = ({ client, children }) => {
  return (
    <>
      <TopNav>
        <PageCard label="Podrobnosti klienta" icon="user" />
        <ProfilePill name={client} role="klient" />
      </TopNav>
      <TabNav />
      <Styled.Wrapper>{children}</Styled.Wrapper>
    </>
  );
};
