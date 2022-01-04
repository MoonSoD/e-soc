import { ChangeEvent, FC } from "react";
import Styled from "./DataTable.styled";
import { Icon } from "@components/common/Icon/Icon";

interface Props {
  withActions?: boolean;
  header: {
    label: string;
    id: string;
    align?: "left" | "center" | "right";
    sortable?: boolean;
  }[];
  data: { rowEntries: (string | number | boolean)[] }[];
  onSearch?: (e: ChangeEvent<HTMLInputElement>) => void;
  searchPlaceholder?: string;
}

export const DataTable: FC<Props> = ({
  withActions,
  header,
  data,
  onSearch,
  searchPlaceholder,
}) => {
  return (
    <>
      <Styled.Search.Wrapper>
        <Styled.Search.Badge>Vyhľadať</Styled.Search.Badge>
        <Styled.Search.Input
          placeholder={searchPlaceholder}
          maxLength={23}
          type="text"
          onChange={onSearch}
        />
        <Styled.Search.Icon>
          <Icon name="search" width={22} height={22} />
        </Styled.Search.Icon>
      </Styled.Search.Wrapper>
      <Styled.Table>
        <Styled.Header>
          {header?.map((item) => (
            <Styled.Th
              sortable={item?.sortable}
              align={item.align ?? "left"}
              id={item.id}
            >
              {item.label}
              {item?.sortable && (
                <Icon gray width={24} height={24} name="caret-down" />
              )}
            </Styled.Th>
          ))}
        </Styled.Header>
        <Styled.Body>
          {data?.map((data) => (
            <Styled.DataRow>
              {data?.rowEntries?.map((entry) => (
                <Styled.Td
                  align={
                    header[data?.rowEntries?.indexOf(entry)]?.align ?? "left"
                  }
                  id={entry?.toString()}
                >
                  {entry}
                </Styled.Td>
              ))}
              {withActions && (
                <Styled.Td id="actions" align="right">
                  <Icon
                    className="offset-top"
                    name="grid-small-round"
                    width={33}
                    height={33}
                  />
                </Styled.Td>
              )}
            </Styled.DataRow>
          ))}
        </Styled.Body>
      </Styled.Table>
    </>
  );
};
