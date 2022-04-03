import createService, { Room } from "@services";
import { User } from "@services/auth-service";

export interface Client extends User {
  personal_no: string;
  email?: string;
  address: string;
  country: string;
  joined_at: string;
  left_at?: string;
  roomId: number;
  Room: Room;
}

export const addClient = (data: Client, jwt?: string) =>
  createService({ endpoint: "/clients", method: "POST", data, jwt });

export const getClientsList = (jwt?: string) =>
  createService<Client[]>({ endpoint: "/clients", jwt });

export const getClientById = (id: string, jwt?: string) =>
  createService<Client>({ endpoint: `/clients/${id}`, jwt });

export const exportClientList = (jwt?: string) =>
  createService({ endpoint: "/clients/export", jwt });

export const updateClient = async (id: string, data: Client, jwt?: string) => {
  console.log("DDDID: " + id);
  await createService<Client>({
    endpoint: `/clients/${id}`,
    method: "PATCH",
    data,
    jwt,
  });
};

export const deleteClient = (id: string, jwt?: string) =>
  createService({ endpoint: `/clients/${id}`, method: "delete", jwt });
