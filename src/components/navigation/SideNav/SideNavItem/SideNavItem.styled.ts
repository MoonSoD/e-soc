import styled from "styled-components";
import { colors } from "@styles";

export default {
  SubLinks: styled.ul<{ isOpen?: boolean }>`
    height: ${(props) => (props?.isOpen ? "auto" : "0")};
    display: flex;
    position: relative;
    overflow: hidden;
    flex-direction: column;
    color: #595959;
    font-size: 0.875rem;

    padding: ${(props) => (props?.isOpen ? "0.5rem 0" : 0)};
    transition-duration: 0.1s;
    border-left: 2px solid ${colors.lightGreen};

    padding-left: 0.9375rem;
    margin-left: 1.25rem;

    & > li {
      list-style-type: none;
      margin: 0;
    }
  `,
  SubLink: styled.li`
    cursor: pointer;
    display: flex;
    align-items: center;

    &:hover {
      transform: translateX(0.1rem);
      transition-duration: 0.2s;
    }
  `,
};
