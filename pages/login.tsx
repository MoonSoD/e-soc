import { FC } from "react";
import styled from "styled-components";
import Cover from "@public/images/login-cover.svg";
import Logo from "@public/images/logo.png";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { Form } from "@components";
import { colors } from "@styles";

const Styled = {
  Container: styled.div`
    display: flex;
  `,
  Cover: styled.section`
    display: none;

    @media only screen and (min-width: 768px) {
      display: grid;
      place-items: center;
      height: 100vh;
      width: calc(100vw - 31.25rem);
      background: linear-gradient(
        180deg,
        #24de37 0%,
        rgba(72, 155, 80, 0.4) 0.01%
      );
    }
  `,
  Stripe: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    @media only screen and (min-width: 768px) {
      width: 31.25rem;
    }

    height: 100vh;

    & > div,
    form {
      margin: 0.9375rem 0;
    }
  `,
  CtaText: styled.p`
    font-size: 0.75rem;
    color: #797979;
  `,
  Form: styled.form`
    display: flex;
    flex-direction: column;

    & > div {
      margin: 1.5625rem 0;
    }
  `,
  Button: styled.input`
    background-color: ${colors.darkGreen};
    cursor: pointer;
    height: 2.625rem;
    font-size: 1.125rem;
    font-weight: 500;
    width: 100%;
    color: #fff;
    border: none;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    transition-duration: 0.3s;
    margin-top: 0.9375rem;

    &:hover {
      box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);
    }
  `,
};

const Login: FC = () => {
  const form = useForm();

  return (
    <Styled.Container>
      <Styled.Cover>
        <Image src={Cover} width={596} height={415} />
      </Styled.Cover>
      <Styled.Stripe>
        <div>
          <Image src={Logo} width={110} height={55} unoptimized />
        </div>
        <Styled.CtaText>Začnite prihlásením do systému</Styled.CtaText>
        <Styled.Form>
          <Form.Input.Base>
            <Form.Input.Label>e-mail</Form.Input.Label>
            <Form.Input.Input
              placeholder="email@zoznam.sk"
              type="text"
              width="26rem"
              {...form.register("email")}
            />
          </Form.Input.Base>
          <Form.Input.Base>
            <Form.Input.Label>heslo</Form.Input.Label>
            <Form.Input.Input
              placeholder="••••••••"
              type="password"
              width="26rem"
              {...form.register("password")}
            />
          </Form.Input.Base>
          <Styled.Button type="submit" value="Prihlásiť" />
        </Styled.Form>
      </Styled.Stripe>
    </Styled.Container>
  );
};

export default Login;
