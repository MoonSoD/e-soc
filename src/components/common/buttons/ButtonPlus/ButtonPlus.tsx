import { FC } from "react";
import Styled from "./ButtonPlus.styled";
import { Icon } from "@components";

export const ButtonPlus: FC = () => {
  return (
    <Styled.Button>
      <Icon white width={33} height={33} name="plus" />
    </Styled.Button>
  );
};
