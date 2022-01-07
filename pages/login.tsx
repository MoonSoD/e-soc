import { FC } from "react";
import styled from "styled-components";
import Cover from "@public/images/login-cover.svg";
import Logo from "@public/images/logo.png";
import Image from "next/image";

const Styled = {
  Container: styled.div`
    display: flex;
  `,
  Cover: styled.section`
    display: grid;
    place-items: center;
    height: 100vh;
    width: calc(100vw - 31.25rem);
    background: linear-gradient(
      180deg,
      #24de37 0%,
      rgba(72, 155, 80, 0.4) 0.01%
    );
  `,
  Stripe: styled.section`
    display: grid;
    place-items: center;
    width: 31.25rem;
    height: 100vh;
  `,
  CtaText: styled.p`
    font-size: 0.75rem;
    color: #797979;
  `,
};

const Login: FC = () => {
  return (
    <Styled.Container>
      <Styled.Cover>
        <Image src={Cover} width={596} height={415} />
      </Styled.Cover>
      <Styled.Stripe>
        <div>
          <Image src={Logo} width={110} height={55} unoptimized />
        </div>
      </Styled.Stripe>
    </Styled.Container>
  );
};

export default Login;
