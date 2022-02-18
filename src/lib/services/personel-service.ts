import createService from "@services";
import { User } from "@services/auth-service";

export interface Personel extends User {
  registered_at: string;
  role: number;
  email: string;
}

export const addPersonel = (data: Personel, jwt?: string) =>
  createService({ endpoint: "/personel", method: "POST", data, jwt });

export const getPersonelList = (jwt?: string) =>
  createService<Personel[]>({ endpoint: "/personel", jwt });

export const getSelf = (jwt?: string) =>
  createService<Personel>({ endpoint: "/personel/self", jwt });

export const getPersonelById = (id: string, jwt?: string) =>
  createService<Personel>({ endpoint: `/personel/${id}`, jwt });

export const exportPersonelList = (jwt?: string) =>
  createService({ endpoint: "/personel/export", jwt });

export const updatePersonel = (id: string, data: Personel, jwt?: string) =>
  createService<Personel>({
    endpoint: "/personel",
    method: "PATCH",
    data,
    jwt,
  });

export const deletePersonel = (id: string, jwt?: string) =>
  createService({ endpoint: `/personel/${id}`, method: "delete", jwt });
