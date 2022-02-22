import { ChangeEvent, FC, useEffect, useState } from "react";
import Styled from "./DataTable.styled";
import { Icon } from "@components/common/Icon/Icon";
import { useForm } from "react-hook-form";
import { EditSideBar, Input } from "@components/common/EditSideBar/EditSideBar";
import { useSession } from "next-auth/react";
import { ButtonPlus } from "@components/common/buttons/ButtonPlus/ButtonPlus";
import { Struct } from "superstruct";
import useSWR from "swr";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import http from "../../../lib/http";

interface Props {
  withActions?: boolean;
  hideUpdate?: boolean;
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
  deleteFn?: (id: any, jwt?: string) => Promise<any>;
  sidebar: {
    label: string;
    inputs: Input[];
    onSubmit: (data: any, mode: "create" | "edit") => void;
    schema: Struct<any, any>;
    fetchFn: (id: any, jwt?: string) => Promise<any>;
  };
  exportLink?: string;
}

//type Data = any[];

type RowData = { rowEntries: RowEntries; id: string | number }[];
type RowEntries = (string | number | boolean)[];

export const DataTable: FC<Props> = ({
  withActions,
  hideUpdate,
  onAction,
  exportLink,
  header,
  data,
  onSearch,
  searchPlaceholder,
  sidebar,
  deleteFn,
}) => {
  const indexOf = (
    data: { rowEntries: RowEntries },
    entry: string | number | boolean,
  ) => data?.rowEntries?.indexOf(entry);

  const { register, watch } = useForm();
  const session = useSession();
  const router = useRouter();

  const [mode, setMode] = useState("create" as "create" | "edit");
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [editedObjectId, setEditedObjectId] = useState<string | number>(1);

  //const editedObject = data.find((data) => data.id === editedObjectId);

  const resolvedObject = useSWR(
    session?.status === "authenticated"
      ? `${editedObjectId}-${sidebar.label}`
      : null,
    () => sidebar.fetchFn(editedObjectId, session.data?.accessToken),
  );

  useEffect(() => console.log(JSON.stringify(resolvedObject.data)));

  return (
    <>
      {sidebarOpen && (
        <EditSideBar
          editedObject={resolvedObject?.data}
          schema={sidebar.schema}
          onSubmit={sidebar.onSubmit}
          label={sidebar.label}
          mode={mode}
          onClose={() => setSidebarOpen(false)}
          inputs={sidebar.inputs}
        />
      )}

      <Styled.Search.Wrapper id="wrapper">
        <Styled.Search.Badge>Vyhľadať</Styled.Search.Badge>
        <Styled.Search.Input
          placeholder={searchPlaceholder}
          maxLength={23}
          type="text"
          {...register("search")}
        />
        <Styled.Search.Icon>
          <Icon name="search" width={22} height={22} />
        </Styled.Search.Icon>
        <Styled.Search.Plus>
          <ButtonPlus
            onClick={() => {
              setMode("create");
              setSidebarOpen(true);
            }}
          />
          {exportLink && (
            <Styled.Search.Export
              onClick={() => {
                http
                  .get(`${process.env.NEXT_PUBLIC_API_URL}${exportLink}`, {
                    responseType: "blob",
                    headers: {
                      Authorization: `Bearer ${session.data?.accessToken}`,
                      "Content-Type": "text/xlsx",
                    },
                  })
                  .then((response) => {
                    const url = window.URL.createObjectURL(
                      new Blob([response.data]),
                    );
                    const link = document.createElement("a");
                    link.href = url;
                    link.setAttribute("download", "export.xlsx"); //or any other extension
                    document.body.appendChild(link);
                    link.click();
                  });
              }}
            >
              <Icon name="table" width={22} height={22} white />
            </Styled.Search.Export>
          )}
        </Styled.Search.Plus>
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
          {data
            ?.filter((data) => {
              return data.rowEntries.find((entry) =>
                entry?.toString().includes(watch("search") ?? ""),
              );
            })
            ?.map((data, i) => (
              <Styled.DataRow key={i}>
                {data?.rowEntries?.map((entry) => (
                  <Styled.Td
                    align={header[indexOf(data, entry)]?.align ?? "left"}
                    id={entry?.toString()}
                  >
                    {entry}
                  </Styled.Td>
                ))}
                <Styled.Td id="actions" align="right" key="action">
                  {withActions && (
                    <Icon
                      onClick={onAction ? () => onAction(data.id) : undefined}
                      className="offset-top"
                      name="search"
                      width={33}
                      height={33}
                    />
                  )}

                  {!hideUpdate && (
                    <Icon
                      onClick={() => {
                        setMode("edit");
                        setSidebarOpen(true);
                        setEditedObjectId(data.id);
                      }}
                      name="edit"
                      width={30}
                      height={30}
                    />
                  )}

                  <Icon
                    onClick={() => {
                      if (deleteFn) {
                        toast
                          .promise(
                            deleteFn(data.id, session?.data?.accessToken),
                            {
                              success: "Položka úspešne odstránená!",
                              loading: "Odstraňujem položku",
                              error: "Nastala chyba!",
                            },
                          )
                          .then(() => router.reload());
                      }
                    }}
                    name="trash-empty"
                    width={30}
                    height={30}
                  />
                </Styled.Td>
              </Styled.DataRow>
            ))}
        </Styled.Body>
      </Styled.Table>
      {/*<Styled.Pagination.Base id="base">
        <Styled.Pagination.List>
          <Styled.Pagination.Item>
            <Icon white name="chevron-big-left" width={12} height={12} />
          </Styled.Pagination.Item>
          <Styled.Pagination.Item>1</Styled.Pagination.Item>
          <Styled.Pagination.Item>
            <Icon white name="chevron-big-right" width={12} height={12} />
          </Styled.Pagination.Item>
        </Styled.Pagination.List>
      </Styled.Pagination.Base>*/}
    </>
  );
};
