import styled from "styled-components";
import { colors } from "@styles";

export default {
  Card: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 14rem;
    height: 2.1875rem;
    padding-left: 2.5rem;
    background-color: ${colors.darkGreen};

    & > h1 {
      text-align: center;
      font-weight: normal;
      font-size: 1.25rem;
      color: #fff;
    }
  `,
  Badge: styled.div`
    display: grid;
    place-items: center;
    margin-right: -1.25rem;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 0.625rem;
    background-color: ${colors.darkGreen};
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  `,
};
