import React, { FC } from "react";
import { ClientDetail, Icon, withLayout } from "@components";
import styled from "styled-components";
import { colors } from "@styles";

const Styled = {
  Wrapper: styled.div`
    padding: 1.5rem 0;
  `,
  ClientInfo: {
    List: styled.ul`
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1.5rem;
    `,
    Item: {
      Base: styled.li`
        display: flex;
      `,
      Icon: styled.div`
        padding-right: 0.5rem;
        border-right: 1px solid ${colors.darkGreen};
      `,
      Info: styled.div`
        display: grid;
        row-gap: 0.25rem;
        padding: 0 0.5rem;

        & > h2 {
          font-size: 1rem;
          font-weight: 500;
          margin: 0;
        }

        & > p {
          font-size: 1rem;
          font-weight: 300;
          margin: 0;
        }
      `,
    },
  },
};

const Index: FC = () => {
  return (
    <ClientDetail client="Ján Novák">
      <Styled.Wrapper>
        <Styled.ClientInfo.List>
          <InfoBadge
            icon="id-card"
            label="Meno a priezvisko"
            value="Ján Novák"
          />
        </Styled.ClientInfo.List>
      </Styled.Wrapper>
    </ClientDetail>
  );
};

export default withLayout(Index, "wide");

interface Props {
  icon: string;
  label: string;
  value: string;
}

const InfoBadge: FC<Props> = ({ icon, label, value }) => {
  return (
    <Styled.ClientInfo.Item.Base>
      <Styled.ClientInfo.Item.Icon>
        <Icon name={icon} width={24} height={24} />
      </Styled.ClientInfo.Item.Icon>
      <Styled.ClientInfo.Item.Info>
        <h2>{label}</h2>
        <p>{value}</p>
      </Styled.ClientInfo.Item.Info>
    </Styled.ClientInfo.Item.Base>
  );
};
