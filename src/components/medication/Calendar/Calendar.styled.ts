import styled, { css } from "styled-components";
import { colors } from "@styles";

export default {
  Wrapper: styled.section`
    margin-left: 5rem;
    flex-grow: 1;
    flex-shrink: 1;
  `,
  Calendar: styled.div`
    display: grid;
    margin-top: -0.625rem;
    gap: 0;
    grid-template-columns: repeat(7, 1fr);
  `,
  CalendarDay: styled.ul`
    margin: 0;
    padding: 0;
    width: 100%;
    list-style-type: none;
    display: flex;
    flex-direction: column;

    &:first-child {
      & span {
        display: flex;
        align-items: center;
        margin-left: -3rem;
        color: #71717a;
        height: 100%;
      }
    }
  `,
  CalendarEntry: styled.li`
    border-top: 1px solid #e0e0e0;
    border-left: 1px solid #e0e0e0;
    height: 4.5rem;
    background-color: #fafafa;

    & span {
      display: none;
    }

    &:first-child {
      position: sticky;
      background-color: #f4f4f5;
      box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
      top: 3.125rem;
      height: 4rem;
      padding: 0.5rem;
      border-top: none;
    }
  `,
  CalendarDayHeading: styled.h2`
    font-size: 1rem;
    padding: 0;
    margin: 0 0 0.25rem;
    text-transform: uppercase;
    font-weight: bold;
    color: #71717a;
  `,
  CalendarBigDateHeading: styled.h3`
    font-size: 1.5rem;
    font-weight: 500;
    padding: 0;
    margin: 0;
  `,
  Navigation: {
    Base: styled.nav`
      width: 100%;
      background-color: #fff;
      position: sticky;
      top: 0;
      padding: 0.5rem 0;
      display: flex;
      justify-content: space-between;
      margin-bottom: 1rem;
    `,
    Wrapper: styled.div`
      display: flex;

      & > button {
        margin: 0 0.125rem;
      }
    `,
    Button: styled.button<{ direction: "next" | "prev" | "none" | "both" }>`
      border: none;
      outline: none;
      background-color: ${colors.darkGreen};
      padding: 0.5rem 0.75rem;
      color: #fff;
      cursor: pointer;
      transition-duration: 0.3s;

      &:hover {
        background-color: ${colors.lightGreen};
      }

      ${(props) =>
        props.direction === "next" &&
        css`
          border-radius: 0 6px 6px 0;
        `}

      ${(props) =>
        props.direction === "prev" &&
        css`
          border-radius: 6px 0 0 6px;
        `}

      ${(props) =>
        props.direction === "none" &&
        css`
          width: 10rem;
        `}


      ${(props) =>
        props.direction === "both" &&
        css`
          width: 8rem;
          border-radius: 6px;
        `}
    `,
  },
};
