import NextAuth, { CallbacksOptions, NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getPersonelById, login, Personel } from "@services";
import { signOut } from "next-auth/react";
import { NextApiRequest, NextApiResponse } from "next";

const callbacks: CallbacksOptions = {
  async signIn(info) {
    console.log("Signing in!" + JSON.stringify(info.user));
    return true;
  },
  async redirect(info) {
    return info.url;
  },
  async jwt({ token, user }) {
    console.log("JWT TOK " + user?.access_token);
    return { access_token: token.access_token };
  },
  async session({ session, user, token }) {
    console.log("getting sess" + token.access_token);
    const usr = (await getPersonelById("ckzli20qd0002bsqstv3r1ow6", "").catch(
      () => signOut(),
    )) as Personel;

    console.log(usr.name);

    session.user = usr;
    session.accessToken = token.access_token;

    return session;
  },
};

const options: NextAuthOptions = {
  debug: true,
  callbacks: callbacks as unknown as CallbacksOptions,
  providers: [
    CredentialsProvider({
      id: "credentials",
      type: "credentials",
      name: "Login",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "heslo", type: "password" },
      },

      async authorize(credentials) {
        const loginResult = await login(
          credentials?.email,
          credentials?.password,
        );

        console.log("Logging in" + JSON.stringify(loginResult));

        if (loginResult) {
          return Promise.resolve(loginResult);
        }

        return Promise.reject(loginResult);
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 31 * 24 * 60 * 60,
  },
  pages: {
    signIn: "/login",
    signOut: "/login",
    error: "/login",
  },
  secret: "1234",
};

export default (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options);
