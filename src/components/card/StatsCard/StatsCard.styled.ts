import styled from "styled-components";

export default {
  Wrapper: styled.article<{ color: string }>`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.9375rem;
    height: 5.625rem;
    width: 100%;
    border-radius: 10px;
    box-shadow: 0px 0px 31.875px 1.275px rgba(0, 0, 0, 0.25);
    background-color: ${(props) => props.color};
  `,
  Content: styled.div`
    display: flex;
    flex-direction: column;
  `,
  Value: styled.h1`
    color: #fff;
    font-weight: 500;
    font-size: 2.25rem;
    margin: 0;
  `,
  Label: styled.p`
    margin: 0;
    margin-top: -6px;
    font-size: 0.85rem;
    color: #d7d7d7;
  `,
  Icon: styled.div<{ color?: string }>`
    width: 3.125rem;
    padding-left: 0.875rem;
    border-left: 1px solid ${(props) => props.color};
  `,
};
