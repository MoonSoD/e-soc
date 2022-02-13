import createService from "@services";

export interface Room {
  id?: number;
  diplay: string;
  pavilon: number;
  level: number;
  max_capacity: number;
}

export const addRoom = (data: Room, jwt?: string) =>
  createService({ endpoint: "/rooms", method: "POST", data, jwt });

export const getRoomList = (jwt?: string) =>
  createService<Room[]>({ endpoint: "/rooms", jwt });

export const getRoomById = (id: number, jwt?: string) =>
  createService<Room>({ endpoint: `/rooms/${id}`, jwt });

export const updateRoom = (id: number, data: Room, jwt?: string) =>
  createService<Room>({ endpoint: "/rooms", method: "PATCH", data, jwt });

export const deleteRoom = (id: number, jwt?: string) =>
  createService({ endpoint: `/rooms/${id}`, method: "delete", jwt });
