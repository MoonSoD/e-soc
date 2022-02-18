import React, { FC, useEffect } from "react";
import { DataTable, PageCard, TopNav, withLayout } from "@components";
import { Container } from "@styles";
import { useRouter } from "next/router";
import { withAuth } from "@hocs/withAuth";
import { Client, getClientsList } from "@services";

const table = {
  header: [
    {
      id: "name-surname",
      label: "Meno a priezvisko",
    },
    {
      id: "living",
      label: "Bydlisko",
    },
    {
      id: "room",
      label: "Izba",
    },
    {
      id: "action",
      label: "Akcia",
      align: "right" as const,
    },
  ],
};

const Home = ({ clients }: { clients: Client[] }) => {
  const router = useRouter();

  return (
    <>
      <TopNav>
        <PageCard label="Zoznam klientov" icon="group" />
      </TopNav>
      <Container marginTop="2.85rem">
        <DataTable
          withActions
          searchPlaceholder="Ján Novák..."
          header={table.header}
          data={clients.map((client) => ({
            rowEntries: [
              `${client.name} ${client.surname}`,
              client.address,
              client.roomId,
            ],
          }))}
          onAction={(id) => router.push("/clients/client#" + id)}
        />
      </Container>
    </>
  );
};

export default withLayout(Home as FC);

export const getServerSideProps = withAuth(async (ctx) => {
  const jwt = ctx.session.accessToken;
  const clients = await getClientsList(jwt);

  return {
    props: { clients },
  };
});
