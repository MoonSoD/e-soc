import { FC } from "react";
import Styled from "./MedBar.styled";
import { ButtonCross, ButtonPlus, MedBarItem } from "@components";

export const MedBar: FC = () => {
  return (
    <Styled.Wrapper>
      <Styled.Header>
        <h2>Zoznam liekov</h2>
        <Styled.BtnOffset>
          <ButtonCross />
        </Styled.BtnOffset>
      </Styled.Header>
      <Styled.ActionBar>
        <ButtonPlus />
      </Styled.ActionBar>
      <Styled.MedicationList>
        <MedBarItem />
      </Styled.MedicationList>
    </Styled.Wrapper>
  );
};
