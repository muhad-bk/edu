import { JsonValue } from "type-fest";
import { Staf } from "../staf/Staf";

export type User = {
  createdAt: Date;
  email: string | null;
  fullName: string | null;
  id: string;
  language?: "English" | null;
  profilePicUrl: string | null;
  roles: JsonValue;
  stafs?: Array<Staf>;
  updatedAt: Date;
  username: string;
};
