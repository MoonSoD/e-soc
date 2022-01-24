import styled from "styled-components";
import { colors } from "@styles";

export default {
  Header: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & img {
      cursor: pointer;
    }
  `,
  Base: styled.nav<{ open?: boolean }>`
    position: sticky;
    top: 0;
    height: 98.23vh;
    width: 15.625rem;
    background-color: #fdfdfd;
    transform: translateX(${(props) => (props?.open ? "0%" : "-100%")});
  `,
  Wrapper: styled.div`
    margin: 0.9375rem 1.25rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,
  Label: styled.span`
    margin-top: 1.875rem;
    display: block;

    font-style: normal;
    font-weight: 600;
    font-size: 0.625rem;
    line-height: 0.9375rem;

    color: #b2b2b2;
  `,
  List: styled.ul`
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    list-style-type: none;

    & li {
      margin: 0.21875rem 0;
      user-select: none;

      &:hover {
        & .icon {
          background-color: ${colors.darkGreen};
        }
      }

      a {
        display: flex;
        align-items: center;
        cursor: pointer;
      }

      span {
        display: flex;
        align-items: center;
        padding: 0 1.1875rem;
        margin-left: -8px;
        border-radius: 0 50px 50px 0;

        background-color: ${colors.lightGray};
        height: 40px;
        width: 100%;

        font-style: normal;
        font-weight: 300;
        font-size: 1.125rem;
        line-height: 1.6875rem;

        color: #545454;
      }

      & .icon {
        display: grid;
        place-items: center;
        border-radius: 10px;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
        width: 2.5rem;
        height: 2.5rem;
        transition-duration: 0.3s;
        flex-shrink: 0;
        z-index: 10;
        background-color: ${colors.lightGreen};

        &.active {
          background-color: ${colors.darkGreen};
        }
      }
    }
  `,
};
