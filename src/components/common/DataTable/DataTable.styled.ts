import styled from "styled-components";
import { colors } from "@styles";

interface Align {
  align: "left" | "center" | "right";
}

export default {
  Search: {
    Wrapper: styled.div`
      display: flex;
      position: relative;
    `,
    Input: styled.input`
      outline: none;
      border: none;
      font-size: 0.75rem;
      padding: 0 0.8rem;
      width: 12.5rem;
      height: 2rem;
      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.25);
      background-color: #fff;
    `,
    Badge: styled.span`
      position: absolute;
      top: -1.1875rem;
      font-size: 0.75rem;
      font-weight: 400;
      padding: 0.15625rem 0.5rem;
      background-color: ${colors.darkGreen};
      color: #fff;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      text-transform: uppercase;
    `,
    Icon: styled.span`
      position: absolute;
      top: 60%;
      left: 200px;
      transform: translateY(-50%);
    `,
  },
  Table: styled.table`
    font-size: 0.875rem;
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.3125rem;
    border: none;
  `,
  Header: styled.thead`
    color: #797979;
    padding-right: 0.625rem;

    & > th {
      font-weight: 500;
      font-size: 0.875rem;
      padding: 0.3125rem 0;
      border-bottom: 1px solid #c4c4c4;

      & > img {
        display: inline;
        margin-bottom: -0.5rem;
      }
    }

    & > th:first-child {
      padding-left: 0.625rem;
    }

    & > th:last-child {
      padding-right: 0.625rem;
    }
  `,
  Body: styled.tbody`
    padding-top: 0.625rem;
  `,
  DataRow: styled.tr`
    background-color: #fff;
    height: 2.375rem;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.25);

    & > td:first-child {
      padding-left: 0.625rem;
    }

    & > td:last-child {
      padding-right: 0.625rem;
    }
  `,
  Td: styled.td<Align>`
    text-align: ${(props) => props.align};
  `,
  Th: styled.th<Align & { sortable?: boolean }>`
    text-align: ${(props) => props.align};
    user-select: none;
    cursor: ${(props) => (props?.sortable ? "pointer" : "initial")};
  `,
};
