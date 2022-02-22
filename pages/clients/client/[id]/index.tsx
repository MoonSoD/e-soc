import React, { FC } from "react";
import { ClientDetail, Icon, withLayout } from "@components";
import styled from "styled-components";
import { colors } from "@styles";
import { withAuth } from "@hocs/withAuth";
import { Client, getClientById } from "@services";

const Styled = {
  Wrapper: styled.div`
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

const Index = ({ client }: { client: Client }) => {
  const fullName = `${client.name} ${client.surname}`;

  return (
    <ClientDetail client={client}>
      <Styled.Wrapper>
        <Styled.ClientInfo.List>
          <InfoBadge
            icon="id-card"
            label="Meno a priezvisko"
            value={fullName}
          />
          <InfoBadge
            icon="user-square"
            label="Pohlavie"
            value={client.sex === "M" ? "Muž" : "Žena"}
          />
          <InfoBadge
            icon="phone-outline"
            label="Rodné číslo"
            value={client.personal_no}
          />
          <InfoBadge icon="location" label="Adresa" value={client.address} />
          <InfoBadge icon="map" label="Krajina" value={client.country} />
          <InfoBadge
            icon="phone-outline"
            label="Telefónne číslo"
            value={client.phone}
          />
          <InfoBadge
            icon="mail-open"
            label="Email"
            value={client.email || "Neuvedený"}
          />
          <InfoBadge
            icon="home-plus"
            label="Izba"
            value={`${client.Room.display}, Pavilon: ${client.Room.pavilon}, Poschodie: ${client.Room.level}`}
          />
        </Styled.ClientInfo.List>
      </Styled.Wrapper>
    </ClientDetail>
  );
};

export default withLayout(Index as FC);

export const getServerSideProps = withAuth(async (context) => {
  const jwt = context.session.accessToken;
  const clientId = context.params?.id;

  const client = await getClientById(clientId as string, jwt);

  if (!client) {
    return {
      notFound: true,
    };
  }

  return { props: { client } };
});

interface Props {
  icon: string;
  label: string;
  value: string | number;
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
