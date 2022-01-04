import React, { FC } from "react";
import { DataTable, PageCard, TopNav, withLayout } from "@components";
import { Container } from "@styles";

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
      id: "is-present",
      label: "V zariadení",
      align: "center" as const,
      sortable: true,
    },
    {
      id: "action",
      label: "Akcia",
      align: "right" as const,
    },
  ],
  data: [
    {
      rowEntries: ["Daniel Ciepluch", "Oščadnica 1253, Slovensko", 54, "nie"],
    },
    {
      rowEntries: ["Daniel Ciepluch", "Oščadnica 1253, Slovensko", 54, "nie"],
    },
  ],
};

const Home: FC = () => {
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
          data={table.data}
        />
      </Container>
    </>
  );
};

export default withLayout(Home, "narrow");
