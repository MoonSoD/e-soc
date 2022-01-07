import styled from "styled-components";

export const colors = {
  lightGreen: "#24DE37",
  darkGreen: "#33A63F",
  lightGray: "#F6F6F6",
  darkGray: "#545454",
};

export const Container = styled.div<{ marginTop?: string }>`
  width: 100%;
  margin: ${(props) => props.marginTop} auto 0 2.1875rem;

  @media only screen and (min-width: 768px) {
    width: calc(100% - 6.2rem);
  }
`;
