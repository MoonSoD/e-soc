import { FC } from "react";
import Styled from "./AlertCard.styled";
import { Icon } from "@components/common/Icon/Icon";

type Type = "day" | "night";

export interface Props {
  type: Type;
}

export const AlertCard: FC<Props> = ({ type }) => {
  return (
    <article>
      <Styled.Badge.Wrapper type={type}>
        <Styled.Badge.Icon type={type}>
          <Icon
            white
            name={type === "night" ? "moon" : "sun"}
            width={33}
            height={33}
          />
        </Styled.Badge.Icon>
        <Styled.Badge.Content>
          <Styled.Badge.Heading>
            {type === "night" ? "Nočné hlásenie" : "Denné hlásenie"}
          </Styled.Badge.Heading>
          <Styled.Badge.Date>23.12.2021</Styled.Badge.Date>
        </Styled.Badge.Content>
      </Styled.Badge.Wrapper>
      <Styled.TextArea />
    </article>
  );
};
