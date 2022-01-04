import React, { FC } from "react";
import { DataTable, PageCard, TopNav, withLayout } from "@components";
import { Container } from "@styles";

const table = {
  header: [
    {
      id: "room",
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
      id: "occupation",
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

const Home: FC = () => {
  return (
    <>
      <TopNav>
        <PageCard label="Zoznam izbieb" icon="home-plus" />
      </TopNav>
      <Container marginTop="2.85rem">
        <DataTable
          withActions
          searchPlaceholder="12"
          header={table.header}
          data={table.data}
        />
      </Container>
    </>
  );
};

export default withLayout(Home, "narrow");
