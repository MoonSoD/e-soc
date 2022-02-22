import styled from "styled-components";
import { colors } from "@styles";

export default {
  Wrapper: styled.aside`
    position: absolute;
    right: 0;
    top: 0;
    width: 30rem;

    flex-shrink: 0;
    height: calc(100vh - 0.7rem);
    margin: 0.375rem 0 0;
    background-color: #fff;
    z-index: 20;
    border: 2px solid #f6f6f6;
  `,
  Base: styled.div`
    position: relative;
    z-index: 500000;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-content: space-between;
  `,
  Header: styled.div`
    height: 2.1875rem;
    position: relative;
    display: flex;
    align-items: center;
    margin-top: -2px;
    margin-right: -2px;
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
    left: -0.3125rem;
  `,
  ActionBar: styled.div`
    display: flex;
    align-items: center;
    padding: 0.3125rem;
    height: 40px;
  `,
  InputGrid: styled.ul`
    padding: 2.5rem;
    margin: 0 auto;
    display: grid;
    gap: 2rem;
    place-items: center;
    grid-template-columns: repeat(2, 1fr);
  `,
  Button: styled.button`
    background-color: ${colors.darkGreen};
    position: absolute;
    bottom: 1rem;
    cursor: pointer;
    height: 2.625rem;
    font-size: 1.125rem;
    font-weight: 500;

    width: 26.5rem;

    color: #fff;
    border: none;
    text-align: center;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    transition-duration: 0.3s;
    margin: 0.9375rem 2rem 0 2rem;

    &:hover {
      box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);
    }
  `,
};
