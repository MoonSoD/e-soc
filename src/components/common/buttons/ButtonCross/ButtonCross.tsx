import { FC } from "react";
import Styled from "./ButtonCross.styled";
import { Icon } from "@components";

export const ButtonCross: FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <Styled.Button onClick={onClick}>
      <Icon white width={33} height={33} name="close-big" />
    </Styled.Button>
  );
};
