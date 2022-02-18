import { Personel } from "@services";

declare module "next-auth" {
  interface Session {
    user: Personel;
    accessToken: string;
  }

  interface User extends Personel {
    access_token: string;
  }
}

declare module "next-auth/JWT" {
  interface JWT {
    access_token: string;
  }
}
