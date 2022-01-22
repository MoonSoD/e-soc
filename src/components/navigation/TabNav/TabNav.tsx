import { FC } from "react";
import Styled from "./TabNav.styled";
import { PageLink } from "@components";

export const TabNav: FC = () => {
  return (
    <Styled.Wrapper>
      <PageLink href="/clients/client">
        <Styled.Item active>Osobné údaje</Styled.Item>
      </PageLink>
      <Styled.Item>Správa liekov</Styled.Item>
    </Styled.Wrapper>
  );
};
