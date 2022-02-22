import createService, { Client } from "@services";

export interface Room {
  id: number;
  display: string;
  pavilon: number;
  level: number;
  max_capacity: number;
  clients: Client[];
}

export const addRoom = (data: Room, jwt?: string) =>
  createService({ endpoint: "/rooms", method: "POST", data, jwt });

export const getRoomList = (jwt?: string) =>
  createService<Room[]>({ endpoint: "/rooms", jwt });

export const getRoomById = (id: number, jwt?: string) =>
  createService<Room>({ endpoint: `/rooms/${id}`, jwt });

export const updateRoom = (id: number, data: Room, jwt?: string) =>
  createService<Room>({ endpoint: `/rooms/${id}`, method: "PATCH", data, jwt });

export const deleteRoom = (id: number, jwt?: string) =>
  createService({ endpoint: `/rooms/${id}`, method: "delete", jwt });
