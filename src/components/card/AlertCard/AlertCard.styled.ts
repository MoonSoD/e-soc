import styled from "styled-components";
import { Props, Type } from "./AlertCard";
import { colors } from "@styles";

export default {
  Badge: {
    Wrapper: styled.div<{ type: Type }>`
      display: flex;
      position: relative;
      width: 12.5rem;
      height: 3.25rem;
      margin: 2.1875rem 0 0 1rem;
      background-color: ${(props) =>
        props.type === "night" ? "#323232" : "#D8E000"};
      box-shadow: 0px 0px 31.875px 1.3px #00000040;
      border-radius: 12.75px;
    `,
    Icon: styled.div<{ type: Type }>`
      display: grid;
      margin-left: -1rem;
      place-items: center;
      align-self: center;
      width: 2.5rem;
      height: 2.5rem;
      box-shadow: 0px 0px 31.875px 1.3px #00000040;
      border-radius: 10px;
      background-color: ${(props) =>
        props.type === "night" ? "#323232" : "#D8E000"};
    `,
    Content: styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 15px;
    `,
    Heading: styled.h2`
      font-size: 0.85rem;
      font-weight: 500;
      color: #fff;
      margin: 0;
    `,
    Date: styled.span`
      display: block;
      font-size: 0.75rem;
      color: #797979;
    `,
  },
  TextArea: styled.textarea`
    margin-top: -1.5rem;
    padding: 2.5rem 1rem 1rem 1rem;
    display: block;
    width: 100%;
    min-height: 28.125rem;
    background-color: #fff;
    border: none;
    box-shadow: 0px 0px 32px -20px #00000040;
    border-radius: 10px;

    &:focus {
      outline: none;
      border: 0.1px solid ${colors.lightGray};
    }
  `,
  Save: styled.div`
    position: absolute;
    right: -1rem;
    top: 1rem;
    margin-top: 0.3rem;
  `,
};
