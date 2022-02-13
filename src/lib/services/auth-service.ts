import createService from "@services";
import { Personel } from "@services/personel-service";

export interface User {
  id?: string;
  name: string;
  surname: string;
  sex: string;
  phone: string;
}

export const register = (jwt?: string) =>
  createService<Personel>({ endpoint: "/auth/register", method: "POST", jwt });

export const login = (email?: string, password?: string) =>
  createService<{ access_token: string }>({
    endpoint: "/auth/login",
    method: "POST",
    data: { email, password },
  });
