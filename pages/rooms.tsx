import React, { FC } from "react";
import { DataTable, PageCard, TopNav, withLayout } from "@components";
import { Container } from "@styles";
import { withAuth } from "@hocs/withAuth";
import { addRoom, getRoomById, getRoomList, Room, updateRoom } from "@services";
import { roomSchema } from "@schemas";
import { useRouter } from "next/router";

const table = {
  header: [
    {
      id: "display",
      label: "Izba",
    },
    {
      id: "pavilon",
      label: "Pavilón",
      align: "center" as const,
    },
    {
      id: "level",
      label: "Poschodie",
      align: "center" as const,
    },
    {
      id: "max_capacity",
      label: "Obsadenie",
      align: "center" as const,
    },
    {
      id: "action",
      label: "Akcia",
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

const Home = ({ rooms, jwt }: { rooms: Room[]; jwt: string }) => {
  const router = useRouter();

  return (
    <>
      <TopNav>
        <PageCard label="Zoznam izieb" icon="home-plus" />
      </TopNav>
      <Container marginTop="2.85rem">
        <DataTable
          searchPlaceholder="12"
          header={table.header}
          data={rooms?.map((room) => ({
            rowEntries: [
              room.display,
              room.pavilon,
              room.level,
              `${room.clients.length}/${room.max_capacity}`,
            ],
            id: room.id,
          }))}
          sidebar={{
            label: "Izba",
            fetchFn: getRoomById,
            onSubmit: (data, mode) => {
              if (mode === "create") {
                addRoom(data, jwt).then(() => router.reload());
              } else {
                updateRoom(data.id, data, jwt).then(() => router.reload());
              }
            },
            inputs: [
              { id: "display", label: "štítok" },
              { id: "pavilon", label: "pavilón", type: "number" },
              { id: "level", label: "poschodie", type: "number" },
              { id: "max_capacity", label: "max kapacita", type: "number" },
            ],
            schema: roomSchema,
          }}
        />
      </Container>
    </>
  );
};

export default withLayout(Home as FC);

export const getServerSideProps = withAuth(async (ctx) => {
  const jwt = ctx.session.accessToken;
  const rooms = await getRoomList(jwt);

  return {
    props: { rooms, jwt },
  };
});
