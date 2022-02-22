import NextAuth, { CallbacksOptions, NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getSelf, login } from "@services";
import { NextApiRequest, NextApiResponse } from "next";

const callbacks: CallbacksOptions = {
  async signIn(info) {
    return info.user?.email !== undefined;
  },
  async redirect(info) {
    return info.url;
  },
  async jwt({ token, user }) {
    if (user) {
      token.access_token = user.access_token;
    }

    return token;
  },
  async session({ session, user, token }) {
    const usr = await getSelf(token?.access_token as string);

    session.user = usr;
    session.accessToken = token?.access_token;

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
  secret: process.env.NEXTAUTH_SECRET || "57ec775042c83a5e42382f4538f1270a",
};

export default (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options);
