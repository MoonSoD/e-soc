import React, { FC } from "react";
import {
  Icon,
  PageCard,
  ProfilePill,
  TabNav,
  TopNav,
  withLayout,
} from "@components";
import styled from "styled-components";
import { colors } from "@styles";

const Styled = {
  Wrapper: styled.section`
    height: calc(100vh - 11.5rem);
    background-color: #fff;
    margin: 0;
    padding: 1.5rem 0;
  `,
  ClientInfo: {
    List: styled.ul`
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1.5rem;
    `,
    Item: {
      Base: styled.li`
        display: flex;
      `,
      Icon: styled.div`
        padding-right: 0.5rem;
        border-right: 1px solid ${colors.darkGreen};
      `,
      Info: styled.div`
        display: grid;
        row-gap: 0.25rem;
        padding: 0 0.5rem;

        & > h2 {
          font-size: 1rem;
          font-weight: 500;
          margin: 0;
        }

        & > p {
          font-size: 1rem;
          font-weight: 300;
          margin: 0;
        }
      `,
    },
  },
};

const Client: FC = () => {
  return (
    <>
      <TopNav>
        <PageCard label="Podrobnosti klienta" icon="user" />
        <ProfilePill name="Ján Novák" role="klient" />
      </TopNav>
      <TabNav />
      <Styled.Wrapper>
        <Styled.ClientInfo.List>
          <InfoBadge
            icon="id-card"
            label="Meno a priezvisko"
            value="Ján Novák"
          />
        </Styled.ClientInfo.List>
      </Styled.Wrapper>
    </>
  );
};

export default withLayout(Client, "wide");

interface Props {
  icon: string;
  label: string;
  value: string;
}

const InfoBadge: FC<Props> = ({ icon, label, value }) => {
  return (
    <Styled.ClientInfo.Item.Base>
      <Styled.ClientInfo.Item.Icon>
        <Icon name={icon} width={24} height={24} />
      </Styled.ClientInfo.Item.Icon>
      <Styled.ClientInfo.Item.Info>
        <h2>{label}</h2>
        <p>{value}</p>
      </Styled.ClientInfo.Item.Info>
    </Styled.ClientInfo.Item.Base>
  );
};
