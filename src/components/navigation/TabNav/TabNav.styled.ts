import styled, { css } from "styled-components";
import { colors } from "@styles";

export default {
  Wrapper: styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    border: 1px solid ${colors.darkGreen};
    padding: 0;
    height: 2.5rem;
    margin: 0;
    list-style-type: none;
    background-color: #fff;
    font-weight: 300;
    font-size: 14px;
    cursor: pointer;
  `,
  Item: styled.li<{ active?: boolean }>`
    width: 100%;
    display: grid;
    place-items: center;
    transition-duration: 0.3s;
    user-select: none;

    &:nth-child(2) {
      border-left: 1px solid ${colors.darkGreen};
    }

    ${(props) =>
      props?.active &&
      css`
        background-color: #d7eed9;
      `}
  `,
};
