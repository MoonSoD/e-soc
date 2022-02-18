import React, { FC } from "react";
import { DataTable, PageCard, TopNav, withLayout } from "@components";
import { Container } from "@styles";

const table = {
  header: [
    {
      id: "name",
      label: "Názov",
    },
    {
      id: "supplement",
      label: "Doplnok",
    },
    {
      id: "strength",
      label: "Sila",
    },
    {
      id: "ATC",
      label: "ATC",
    },
    {
      id: "Issue",
      label: "Výdaj",
    },
    {
      id: "action",
      label: "Akcia",
      align: "right" as const,
    },
  ],
  data: [
    {
      rowEntries: [
        "FURORESE 250",
        "tbl 50x250mg",
        "250 mg",
        "Furosemid",
        "Na predpis",
      ],
    },
    {
      rowEntries: [
        "FURORESE 250",
        "tbl 50x250mg",
        "250 mg",
        "Furosemid",
        "Na predpis",
      ],
    },
  ],
};

const Home: FC = () => {
  return (
    <>
      <TopNav>
        <PageCard label="Zoznam liečiv" icon="plus-circle-outline" />
      </TopNav>
      <Container marginTop="2.85rem">
        <DataTable
          withActions
          searchPlaceholder="Furosemid..."
          header={table.header}
          data={table.data}
        />
      </Container>
    </>
  );
};

export default withLayout(Home);
