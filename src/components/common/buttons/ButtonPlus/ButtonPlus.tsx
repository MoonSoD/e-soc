import { FC } from "react";
import Styled from "./ButtonPlus.styled";
import { Icon } from "@components";

export const ButtonPlus: FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <Styled.Button onClick={onClick}>
      <Icon white width={33} height={33} name="plus" />
    </Styled.Button>
  );
};
