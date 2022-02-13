import NextAuth from "next-auth";
import { Personel } from "@services";

declare module "next-auth" {
  interface Session {
    user: Personel;
    accessToken: string;
  }

  interface User extends Personel {
    placeholder: unknown;
  }
}

declare module "next-auth/JWT" {
  interface JWT {
    access_token: string;
  }
}
