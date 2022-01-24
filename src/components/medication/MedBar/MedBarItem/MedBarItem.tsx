import { FC } from "react";
import Styled from "./MedBarItem.styled";
import { Select } from "@components";

const options = [
  { value: "FURORESE 250", label: "FURORESE 250" },
  { value: "FURORESE 500", label: "FURORESE 500" },
  { value: "FURORESE 1000", label: "FURORESE 1000" },
];

export const MedBarItem: FC = () => {
  return (
    <Styled.Wrapper>
      <div>
        <Styled.Properties>
          <li>
            <Select label="názov" options={options} />
          </li>
          <li>
            <Select label="liečba" />
          </li>
        </Styled.Properties>
      </div>
    </Styled.Wrapper>
  );
};
