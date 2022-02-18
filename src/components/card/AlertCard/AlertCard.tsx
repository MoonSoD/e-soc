import { FC } from "react";
import Styled from "./AlertCard.styled";
import { Icon } from "@components/common/Icon/Icon";
import { Report } from "@services";

export type Type = "day" | "night";

export interface Props {
  type: Type;
  report: Report;
}

export const AlertCard: FC<Props> = ({ type, report }) => {
  return (
    <article>
      <Styled.Badge.Wrapper type={type}>
        <Styled.Badge.Icon type={type}>
          <Icon
            white
            name={report.type === 0 ? "moon" : "sun"}
            width={33}
            height={33}
          />
        </Styled.Badge.Icon>
        <Styled.Badge.Content>
          <Styled.Badge.Heading>
            {report.type === 0 ? "Nočné hlásenie" : "Denné hlásenie"}
          </Styled.Badge.Heading>
          <Styled.Badge.Date>
            {new Date(report.date).toLocaleDateString()}
          </Styled.Badge.Date>
        </Styled.Badge.Content>
      </Styled.Badge.Wrapper>
      <Styled.TextArea defaultValue={report.revisions[0].content} />
    </article>
  );
};
