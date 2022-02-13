import React from "react";
import { AlertCard, StatsCard, TopNav, withLayout } from "@components";
import { Container } from "@styles";
import styled from "styled-components";
import {
  GetServerSidePropsContext,
  GetStaticProps,
  GetStaticPropsContext,
  InferGetServerSidePropsType,
  InferGetStaticPropsType,
  NextPageContext,
} from "next";
import { getStats, Stats } from "@services";
import { getSession } from "next-auth/react";

const Styled = {
  StatsGrid: styled.section`
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(1, 1fr);

    @media only screen and (min-width: 768px) {
      gap: 4.5rem;
      grid-template-columns: repeat(2, 1fr);
    }

    @media only screen and (min-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media only screen and (min-width: 1280px) {
      grid-template-columns: repeat(4, 1fr);
    }
  `,
  AlertGrid: styled.section`
    display: grid;
    gap: 4.5rem;
    grid-template-columns: repeat(1, 1fr);

    @media only screen and (min-width: 1024px) {
      gap: 4.5rem;
      grid-template-columns: repeat(2, 1fr);
    }
  `,
};

const Home = ({
  stats,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <TopNav />
      <Container marginTop="2.1875rem">
        <Styled.StatsGrid>
          <StatsCard
            label="klientov"
            value={stats.count.clients}
            icon="user"
            accentColor="#418B48"
            color="#489B50"
          />
          <StatsCard
            label="plánovaných návštev"
            value={stats.count.plannedVisits}
            icon="group-alt"
            accentColor="#8B4141"
            color="#9B4848"
          />
          <StatsCard
            label="dostupných miest"
            value={stats.count.availablePlaces}
            icon="home-alt-check"
            accentColor="#415E8B"
            color="#48699B"
          />
        </Styled.StatsGrid>
        <Styled.AlertGrid>
          <AlertCard type="night" />
          <AlertCard type="day" />
        </Styled.AlertGrid>
      </Container>
    </>
  );
};

export default withLayout(Home, "narrow");

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const session = await getSession(ctx);
  const stats: Stats = await getStats(session?.accessToken);

  return {
    props: {
      stats,
    },
  };
};
