import styled from "styled-components";
import { button } from "@components/common/buttons/Button.styled";

export default {
  Button: styled(button)`
    width: 2.375rem;
    height: 2.375rem;
    background-color: #d75454;

    &:hover {
      background-color: #d21212;
    }
  `,
};
