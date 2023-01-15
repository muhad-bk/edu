import { JsonValue } from "type-fest";
import { Staf } from "../staf/Staf";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  stafs?: Array<Staf>;
  updatedAt: Date;
  username: string;
};
