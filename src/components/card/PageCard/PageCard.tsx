import { FC } from "react";
import Styled from "./PageCard.styled";
import { Icon } from "@components";

interface Props {
  label: string;
  icon: string;
}

export const PageCard: FC<Props> = ({ label, icon }) => {
  return (
    <Styled.Card>
      <h1>{label}</h1>
      <Styled.Badge>
        <Icon white name={icon} width={24} height={24} />
      </Styled.Badge>
    </Styled.Card>
  );
};
