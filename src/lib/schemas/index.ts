import { any, date, number, object, optional, size, string } from "superstruct";

const clientSchema = object({
  id: optional(any()),
  name: size(string(), 1, 128),
  surname: size(string(), 1, 128),
  sex: size(string(), 1, 1),
  roomId: number(),
  personal_no: size(string(), 1, 11),
  phone: size(string(), 13, 13),
  email: optional(size(string(), 5, 64)),
  address: size(string(), 1, 128),
  country: size(string(), 1, 64),
});

const roomSchema = object({
  id: optional(any()),
  display: size(string(), 1, 16),
  pavilon: number(),
  level: number(),
  max_capacity: number(),
});

const visitSchema = object({
  id: optional(any()),
  clientId: string(),
  note: size(string(), 1, 128),
  dateTime: size(string(), 8, 32),
});

export { clientSchema, roomSchema, visitSchema };
