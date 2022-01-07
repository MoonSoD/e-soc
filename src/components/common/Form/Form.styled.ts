import styled from "styled-components";
import { colors } from "@styles";

export default {
  Input: {
    Base: styled.div`
      position: relative;
    `,
    Input: styled.input<{ width: string }>`
      background-color: ${colors.lightGray};
      border-radius: 10px;
      height: 40px;

      @media only screen and (min-width: 768px) {
        width: ${(props) => props.width};
      }

      outline: none;
      border: none;
      padding-left: 0.9375rem;
      font-size: 0.875rem;
    `,
    Label: styled.label`
      position: absolute;
      top: -1.1875rem;
      left: 0.75rem;
      font-size: 0.85rem;
      font-weight: 400;
      padding: 0.15625rem 0.6rem;
      background-color: ${colors.darkGreen};
      color: #fff;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    `,
  },
};
