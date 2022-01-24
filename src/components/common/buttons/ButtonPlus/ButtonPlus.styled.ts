import styled from "styled-components";
import { button } from "@components/common/buttons/Button.styled";
import { colors } from "@styles";

export default {
  Button: styled(button)`
    width: 2.375rem;
    height: 2.375rem;
    background-color: ${colors.lightGreen};

    &:hover {
      background-color: ${colors.darkGreen};
    }
  `,
};
