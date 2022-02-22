import React, { FC, useEffect } from "react";
import {
  DataTable,
  EditSideBar,
  PageCard,
  TopNav,
  withLayout,
} from "@components";
import { Container } from "@styles";
import { useRouter } from "next/router";
import { withAuth } from "@hocs/withAuth";
import {
  addClient,
  Client,
  getClientById,
  getClientsList,
  getRoomList,
  Room,
  updateClient,
} from "@services";
import { clientSchema } from "@schemas";
import useSWR from "swr";

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

const Home = ({ clients, jwt }: { clients: Client[]; jwt: string }) => {
  const router = useRouter();
  const roomList = useSWR<Room[]>("/rooms", () => getRoomList(jwt));

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
            id: client.id,
          }))}
          onAction={(id) => router.push("/clients/client/" + id)}
          sidebar={{
            label: "Klient",
            fetchFn: getClientById,
            onSubmit: (data, mode) => {
              if (mode === "create") {
                addClient(data, jwt).then(() => router.reload());
              } else {
                updateClient(data.id, data, jwt).then(() => router.reload());
              }
            },
            inputs: [
              { id: "name", label: "meno" },
              { id: "surname", label: "priezvisko" },
              {
                id: "sex",
                label: "pohlavie",
                type: "select",
                options: [
                  { label: "Muž", value: "M" },
                  { label: "Žena", value: "F" },
                ],
              },
              {
                id: "roomId",
                label: "izba",
                type: "select",
                options:
                  roomList?.data
                    ?.filter((room) => room.clients.length < room.max_capacity)
                    ?.map((room) => ({
                      label: room.display,
                      value: room.id,
                    })) ?? [],
              },
              { id: "personal_no", label: "rodné číslo" },
              { id: "phone", label: "telefónne číslo" },
              { id: "email", label: "email" },
              { id: "address", label: "adresa" },
              { id: "country", label: "krajina" },
            ],
            schema: clientSchema,
          }}
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
    props: { clients, jwt },
  };
});
