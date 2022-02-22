import React, { FC } from "react";
import { Calendar, PageCard, TopNav, withLayout } from "@components";
import styled from "styled-components";
import { withAuth } from "@hocs/withAuth";

const Styled = {
  Wrapper: styled.div`
    padding-top: 1.5rem;
  `,
  MedGrid: styled.div`
    display: flex;
    width: 100%;
  `,
};

const VisitationCalendar = () => {
  return (
    <>
      <TopNav>
        <PageCard label="Kalendár návštev" icon="home-plus" />
      </TopNav>
      <Styled.Wrapper>
        <Calendar />
      </Styled.Wrapper>
    </>
  );
};

export default withLayout(VisitationCalendar as FC);

export const getServerSideProps = withAuth(async (context) => {
  return { props: {} };
});
