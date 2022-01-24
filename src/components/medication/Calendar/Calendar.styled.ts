import styled from "styled-components";

export default {
  Wrapper: styled.section`
    margin-left: 3rem;
    flex-grow: 1;
    flex-shrink: 1;
  `,
  Calendar: styled.div`
    display: grid;
    gap: 0;
    grid-template-columns: repeat(7, 1fr);
  `,
  CalendarDay: styled.ul`
    margin: 0;
    padding: 0;
    width: 100%;
    list-style-type: none;
    display: flex;
    flex-direction: column;
  `,
  CalendarHour: styled.li`
    border-top: 1px solid #e0e0e0;
    border-left: 1px solid #e0e0e0;
    height: 4.5rem;
    background-color: #fafafa;

    &:first-child {
      height: 4rem;
      padding: 0.5rem;
      border-top: none;
    }
  `,
};
