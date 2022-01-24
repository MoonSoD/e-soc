import { FC } from "react";
import { Calendar, ClientDetail, MedBar, withLayout } from "@components";
import styled from "styled-components";

const Styled = {
  Wrapper: styled.div`
    padding-top: 1.5rem;
  `,
  MedGrid: styled.div`
    display: flex;
    width: 100%;
  `,
};

const Medication: FC = () => {
  return (
    <ClientDetail client="Ján Novák">
      <Styled.Wrapper>
        <Styled.MedGrid>
          <MedBar />
          <Calendar />
        </Styled.MedGrid>
      </Styled.Wrapper>
    </ClientDetail>
  );
};

export default withLayout(Medication, "wide");
