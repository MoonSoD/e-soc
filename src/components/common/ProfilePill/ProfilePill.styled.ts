import styled from "styled-components";
import { colors } from "@styles";

export default {
  Profile: {
    Wrapper: styled.div`
      margin: 1.125rem 0;
      display: flex;
      align-items: center;
    `,
    Picture: styled.div`
      display: grid;
      place-items: center;
      aspect-ratio: 1/1;
      width: 3.125rem;
      height: 3.125rem;
      margin-right: 0.625rem;
      border-radius: 100%;
      box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.25);
      font-size: 1.5rem;
      font-weight: 600;
      color: #fff;
      background-color: ${colors.lightGreen};
    `,
    Info: styled.div`
      display: flex;
      flex-direction: column;
    `,
    Name: styled.p`
      display: flex;
      align-items: center;

      margin: 0;
      font-size: 1.125rem;
      font-weight: 400;

      & > a {
        margin-left: 0.2rem;
        cursor: pointer;
      }
    `,
    Role: styled.p`
      margin: 0;
      font-size: 0.75rem;
      font-weight: 400;
      color: ${colors.darkGray};
    `,
  },
};
