import styled from "styled-components";

export const colors = {
  lightGreen: "#24DE37",
  darkGreen: "#33A63F",
  lightGray: "#F6F6F6",
  darkGray: "#545454",
};

export const Container = styled.div<{ marginTop?: string }>`
  width: calc(100% - 4.375rem);
  margin: ${(props) => props.marginTop} auto 0;
`;
