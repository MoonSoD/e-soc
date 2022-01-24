import styled from "styled-components";
import { colors } from "@styles";

export default {
  Wrapper: styled.aside`
    position: sticky;
    top: 0.5rem;
    width: 20rem;
    @media only screen and (min-width: 1536px) {
      width: 25rem;
    }
    flex-shrink: 0;
    height: calc(100vh - 5rem);
    margin: 0.375rem 0 0;
    padding: 0;
    border: 2px solid #f6f6f6;
  `,
  Header: styled.div`
    height: 2.1875rem;
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 3rem;
    background-color: ${colors.darkGreen};

    & > h2 {
      color: white;
      font-weight: 400;
      font-size: 1.25rem;
    }
  `,
  BtnOffset: styled.div`
    position: absolute;
    top: -0.125rem;
    right: -0.3125rem;
  `,
  ActionBar: styled.div`
    display: flex;
    align-items: center;
    padding: 0.3125rem;
    height: 40px;
  `,
  MedicationList: styled.ul`
    display: flex;
    flex-direction: row;
    padding: 0;
  `,
};
