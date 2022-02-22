import styled, { css } from "styled-components";
import { colors } from "@styles";

export default {
  Input: {
    Base: styled.div`
      position: relative;
    `,
    Input: styled.input<{ width?: string; error?: any }>`
      background-color: ${colors.lightGray};
      border-radius: 10px;
      height: 40px;

      @media only screen and (min-width: 768px) {
        width: ${(props) => props.width ?? "auto"};
      }
      border: none;

      ${(props) =>
        props?.error &&
        css`
          border: 2px solid #d75454;
        `}

      outline: none;
      padding-left: 0.9375rem;
      font-size: 0.875rem;
    `,
    Label: styled.label<{ error?: any }>`
      position: absolute;
      top: -1.1875rem;
      left: 0.75rem;
      font-size: 0.85rem;
      font-weight: 400;
      padding: 0.15625rem 0.6rem;
      background-color: ${(props) =>
        props?.error ? "#D75454" : colors.darkGreen};
      color: #fff;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    `,
  },
};
