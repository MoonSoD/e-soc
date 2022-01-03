import React, { FC } from "react";
import { StatsCard, TopNav, withLayout } from "@components";
import { Container } from "@styles";
import styled from "styled-components";

const Styled = {
  StatsGrid: styled.section`
    display: grid;
    gap: 2.1875rem;
    grid-template-columns: repeat(1, minmax(0, 1fr));

    @media only screen and (min-width: 768px) {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    @media only screen and (min-width: 1024px) {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  `,
};

const Home: FC = () => {
  return (
    <>
      <TopNav>kek</TopNav>
      <Container marginTop="2.1875rem">
        <Styled.StatsGrid>
          <StatsCard
            label="klientov"
            value={40}
            icon="user"
            accentColor="#418B48"
            color="#489B50"
          />
          <StatsCard
            label="plánovaných návštev"
            value={12}
            icon="group-alt"
            accentColor="#8B4141"
            color="#9B4848"
          />
          <StatsCard
            label="obsadených izieb"
            value={12}
            icon="home-alt-check"
            accentColor="#415E8B"
            color="#48699B"
          />
        </Styled.StatsGrid>
      </Container>
    </>
  );
};

export default withLayout(Home, "narrow");
