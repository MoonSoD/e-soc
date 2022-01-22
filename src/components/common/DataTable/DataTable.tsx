import { ChangeEvent, FC } from "react";
import Styled from "./DataTable.styled";
import { Icon } from "@components/common/Icon/Icon";

interface Props {
  withActions?: boolean;
  onAction?: (id: string | number | boolean) => void;
  header: {
    label: string;
    id: string;
    align?: "left" | "center" | "right";
    sortable?: boolean;
  }[];
  data: RowData;
  onSearch?: (e: ChangeEvent<HTMLInputElement>) => void;
  searchPlaceholder?: string;
}

type RowData = { rowEntries: RowEntries }[];
type RowEntries = (string | number | boolean)[];

export const DataTable: FC<Props> = ({
  withActions,
  onAction,
  header,
  data,
  onSearch,
  searchPlaceholder,
}) => {
  const indexOf = (
    data: { rowEntries: RowEntries },
    entry: string | number | boolean,
  ) => data?.rowEntries?.indexOf(entry);

  return (
    <>
      <Styled.Search.Wrapper id="wrapper">
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
      <Styled.Table id="table">
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
          {data?.map((data, i) => (
            <Styled.DataRow>
              {data?.rowEntries?.map((entry) => (
                <Styled.Td
                  align={header[indexOf(data, entry)]?.align ?? "left"}
                  id={entry?.toString()}
                >
                  {entry}
                </Styled.Td>
              ))}
              {withActions && (
                <Styled.Td
                  onClick={
                    onAction ? () => onAction(data.rowEntries?.[0]) : undefined
                  }
                  id="actions"
                  align="right"
                >
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
      <Styled.Pagination.Base id="base">
        <Styled.Pagination.List>
          <Styled.Pagination.Item>
            <Icon white name="chevron-big-left" width={12} height={12} />
          </Styled.Pagination.Item>
          <Styled.Pagination.Item>1</Styled.Pagination.Item>
          <Styled.Pagination.Item>
            <Icon white name="chevron-big-right" width={12} height={12} />
          </Styled.Pagination.Item>
        </Styled.Pagination.List>
      </Styled.Pagination.Base>
    </>
  );
};
