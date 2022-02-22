import { FC, useState } from "react";
import Styled from "./AlertCard.styled";
import { Icon } from "@components/common/Icon/Icon";
import { addReport, Report } from "@services";
import { ButtonPlus } from "@components/common/buttons/ButtonPlus/ButtonPlus";
import { useSession } from "next-auth/react";

export type Type = "day" | "night";

export interface Props {
  type: Type;
  report: Report;
}

export const AlertCard: FC<Props> = ({ type, report }) => {
  if (report === null) {
    report = {
      id: -1,
      type: type === "day" ? 1 : 0,
      date: new Date().toString(),
      revisions: [],
    };
  }

  const [content, setContent] = useState(report?.revisions?.[0]?.content);
  const session = useSession();

  return (
    <article>
      <Styled.Badge.Wrapper type={type}>
        <Styled.Badge.Icon type={type}>
          <Icon
            white
            name={report?.type === 0 ? "moon" : "sun"}
            width={33}
            height={33}
          />
        </Styled.Badge.Icon>
        <Styled.Badge.Content>
          <Styled.Badge.Heading>
            {report?.type === 0 ? "Nočné hlásenie" : "Denné hlásenie"}
          </Styled.Badge.Heading>
          <Styled.Badge.Date>
            {new Date(report?.date).toLocaleDateString()}
          </Styled.Badge.Date>
        </Styled.Badge.Content>
        <Styled.Save>
          <ButtonPlus
            onClick={() =>
              addReport(
                { date: new Date(), content: content },
                session.data?.accessToken,
              )
            }
          />
        </Styled.Save>
      </Styled.Badge.Wrapper>
      <Styled.TextArea
        defaultValue={content}
        onChange={(e) => setContent(e.target.value)}
      />
    </article>
  );
};
