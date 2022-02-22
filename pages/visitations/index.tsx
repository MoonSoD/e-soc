import React, { FC } from "react";
import { DataTable, PageCard, TopNav, withLayout } from "@components";
import { Container } from "@styles";
import { withAuth } from "@hocs/withAuth";
import {
  addClient,
  addVisitation,
  deleteVisitation,
  getClientsList,
  getRoomList,
  getVisitationById,
  getVisitationList,
  Room,
  updateVisitation,
  Visitation,
} from "@services";
import { clientSchema, visitSchema } from "@schemas";
import useSWR from "swr";
import { useRouter } from "next/router";

const table = {
  header: [
    {
      id: "date",
      label: "Dátum",
    },
    {
      id: "client",
      label: "Klient",
    },
    {
      id: "note",
      label: "Poznámka",
    },
    {
      id: "action",
      label: "",
      align: "right" as const,
    },
  ],
  data: [
    {
      rowEntries: [12, 2, 2, "4/5"],
    },
    {
      rowEntries: [12, 2, 2, "4/5"],
    },
  ],
};

const Home = ({
  visitations,
  jwt,
}: {
  visitations: Visitation[];
  jwt: string;
}) => {
  const clients = useSWR("/clients", () => getClientsList(jwt));
  const router = useRouter();

  return (
    <>
      <TopNav>
        <PageCard label="Zoznam návštev" icon="home-plus" />
      </TopNav>
      <Container marginTop="2.85rem">
        <DataTable
          hideUpdate
          searchPlaceholder="12"
          header={table.header}
          data={visitations?.map((visit) => ({
            rowEntries: [
              new Date(visit.dateTime).toLocaleDateString(),
              `${visit.client.name} ${visit.client.surname}`,
              visit.note,
            ],
            id: visit.id,
          }))}
          deleteFn={deleteVisitation}
          exportLink="visitations/export"
          sidebar={{
            label: "Návšteva",
            fetchFn: getVisitationById,
            onSubmit: (data, mode) => {
              if (mode === "create") {
                addVisitation(data, jwt).then(() => router.reload());
              }
            },
            inputs: [
              {
                id: "clientId",
                label: "klient",
                type: "select",
                options: clients?.data?.map((client) => ({
                  label: `${client.name} ${client.surname}`,
                  value: client.id,
                })),
              },
              { id: "note", label: "poznámka" },
              { id: "dateTime", label: "dátum a čas", type: "datetime" },
            ],
            schema: visitSchema,
          }}
        />
      </Container>
    </>
  );
};

export default withLayout(Home as FC);

export const getServerSideProps = withAuth(async (ctx) => {
  const jwt = ctx.session.accessToken;
  const visitations = await getVisitationList(jwt);

  return {
    props: { visitations, jwt },
  };
});
