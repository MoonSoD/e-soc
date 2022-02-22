import styled from "styled-components";

export default {
  Wrapper: styled.li`
    display: grid;
    padding: 0;
    width: 100%;
    margin: 0;

    grid-template-columns: repeat(2, 1fr);
  `,
  Properties: styled.ul`
    list-style-type: none;
    padding: 0.25rem 0.1rem;
    display: grid;
    row-gap: 8px;
    margin: 0;

    & > li {
      display: flex;
      flex-direction: column;
      padding: 0;
      margin: 0;
      font-weight: 300;

      & > h3 {
        padding: 0;
        font-weight: 400;
        color: #797979;
        font-size: 0.875rem;
      }

      /*& > p {
        border: none;
        width: 100px;
        border-bottom: 1px dashed;
        outline: none;
        font-size: 1rem;

        &:hover {
          outline: none;
        }
      }*/
    }
  `,
};
