import styled from "styled-components";

export default {
  Wrapper: styled.nav`
    display: flex;
    align-items: center;
    height: 5.5rem;
    width: 100%;
    background-color: #fff;
    box-shadow: 1px 0px 1px rgba(0, 0, 0, 0.25);

    @media only screen and (min-width: 768px) {
      width: calc(100vw - 15.625rem);
    }
  `,
};
