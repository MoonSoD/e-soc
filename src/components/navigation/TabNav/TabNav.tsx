import { FC } from "react";
import Styled from "./TabNav.styled";
import { PageLink } from "@components";
import { useRouter } from "next/router";

export const TabNav: FC = () => {
  const router = useRouter();

  return (
    <Styled.Wrapper>
      <PageLink href="/clients/client">
        <Styled.Item active={router.pathname === "/clients/client"}>
          Osobné údaje
        </Styled.Item>
      </PageLink>
      <PageLink href="/clients/client/medication">
        <Styled.Item active={router.pathname === "/clients/client/medication"}>
          Správa liekov
        </Styled.Item>
      </PageLink>
    </Styled.Wrapper>
  );
};
