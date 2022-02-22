import { FC, useEffect } from "react";
import {
  default as ReactSelect,
  GroupBase,
  OptionsOrGroups,
  StylesConfig,
} from "react-select";
import { StateManagerProps } from "react-select/dist/declarations/src/useStateManager";
import { colors } from "@styles";
import styled from "styled-components";

const selectStyles: StylesConfig<unknown, boolean, GroupBase<unknown>> = {
  option: (provided) => ({
    ...provided,
    fontSize: "0.75rem",
    cursor: "pointer",
  }),
  control: (provided) => ({
    ...provided,
    border: `none`,
    backgroundColor: "#f6f6f6",
    borderRadius: "10px",
    fontSize: "0.875rem",
    borderColor: colors.lightGreen,
    "&:hover": {
      border: `none`,
    },
    height: "2.5rem",
    margin: "0 -16px 0 0",
    cursor: "pointer",
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: 8,
    paddingRight: 0,
    paddingLeft: 12,
  }),
  menu: (provided) => ({
    ...provided,
    width: "100%",
    margin: "0 10px 10px",
    backgroundColor: "#f4f4f4",
    border: `1px solid ${colors.darkGreen}`,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,

    boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.1)",
    padding: "2px 0",
  }),
};

const Styled = {
  Label: styled.label`
    padding: 0.125rem 0.5rem;
    background-color: ${colors.darkGreen};
    color: #fff;
    display: inline-block;
    width: auto;
    margin-left: 0.5rem;
    margin-top: 10px;
    border-radius: 10px 10px 0 0;
    font-size: 0.875rem;
  `,
  Base: styled.div`
    width: 100%;
    padding: -10px;
    margin-top: -1.75rem;
  `,
};

export const Select: FC<
  StateManagerProps & { label: string; error?: any; default?: string | number }
> = (props) => {
  return (
    <Styled.Base>
      <Styled.Label htmlFor={props.id}>{props.label}</Styled.Label>
      <ReactSelect
        placeholder="Vyberte možnosť..."
        styles={selectStyles}
        {...props}
        theme={(theme) => ({
          ...theme,
          borderRadius: "10px 10px 10px 10px" as unknown as number,
          padding: 0,

          colors: {
            ...theme.colors,
            primary: colors.darkGreen,
            primary50: "#f0f0f0",
            primary25: "#d5d3d3",
          },
        })}
        components={{
          IndicatorSeparator: () => null,
        }}
        options={
          props.options as unknown as OptionsOrGroups<number, GroupBase<number>>
        }
        noOptionsMessage={() => <p>Žiadne výsledky</p>}
      />
    </Styled.Base>
  );
};
