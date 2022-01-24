import { FC } from "react";
import Styled from "./ButtonCross.styled";
import { Icon } from "@components";

export const ButtonCross: FC = () => {
  return (
    <Styled.Button>
      <Icon white width={33} height={33} name="close-big" />
    </Styled.Button>
  );
};
