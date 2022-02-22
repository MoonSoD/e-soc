import { FC } from "react";
import Styled from "./TabNav.styled";
import { PageLink } from "@components";
import { useRouter } from "next/router";

export const TabNav: FC = () => {
  const router = useRouter();

  return (
    <Styled.Wrapper>
      <PageLink href="/clients/client">
        <Styled.Item active={router.pathname.includes("/clients/client")}>
          Osobné údaje
        </Styled.Item>
      </PageLink>
    </Styled.Wrapper>
  );
};
