import styled from "styled-components";

export const button = styled.button`
  border: none;
  padding: 0;
  cursor: pointer;
  border-radius: 10px;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition-duration: 0.3s;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);

  &:hover {
    box-shadow: none;
  }
`;
