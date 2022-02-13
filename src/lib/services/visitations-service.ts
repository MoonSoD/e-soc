import createService from "@services";
import { User } from "@services/auth-service";
import { Client } from "@services/clients-service";

export interface Visitation {
  note: string;
  dateTime: Date;
  client: Client;
}

export const addVisitation = (data: Visitation, jwt?: string) =>
  createService({ endpoint: "/visitations", method: "POST", data, jwt });

export const getVisitationList = (jwt?: string) =>
  createService<Visitation[]>({ endpoint: "/visitations", jwt });

export const getVisitationById = (id: string, jwt?: string) =>
  createService<Visitation>({ endpoint: `/visitations/${id}`, jwt });

export const exportVisitationList = (jwt?: string) =>
  createService({ endpoint: "/visitations/export", jwt });

export const updateVisitation = (id: string, data: Visitation, jwt?: string) =>
  createService<Visitation>({
    endpoint: "/visitations",
    method: "PATCH",
    data,
    jwt,
  });

export const deleteVisitation = (id: string, jwt?: string) =>
  createService({ endpoint: `/visitations/${id}`, method: "delete", jwt });
