import { FC } from "react";
import { Icon } from "@components/common/Icon/Icon";
import Styled from "./StatsCard.styled";

interface ColorProps {
  color: string;
  accentColor?: string;
}

interface Props extends ColorProps {
  label: string;
  value: number;
  icon: string;
}

export const StatsCard: FC<Props> = ({
  color,
  accentColor,
  label,
  value,
  icon,
}) => {
  return (
    <Styled.Wrapper color={color}>
      <Styled.Content>
        <Styled.Value>{value}</Styled.Value>
        <Styled.Label>{label}</Styled.Label>
      </Styled.Content>
      <Styled.Icon color={accentColor}>
        <Icon white name={icon} width={45} height={45} />
      </Styled.Icon>
    </Styled.Wrapper>
  );
};
