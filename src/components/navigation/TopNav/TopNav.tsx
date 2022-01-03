import { FC } from "react";
import Styled from "./TopNav.styled";

export const TopNav: FC = ({ children }) => {
  return <Styled.Wrapper>{children}</Styled.Wrapper>;
};
