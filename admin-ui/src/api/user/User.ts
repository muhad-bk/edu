import { Parent } from "../parent/Parent";
import { JsonValue } from "type-fest";
import { Staf } from "../staf/Staf";
import { Student } from "../student/Student";

export type User = {
  createdAt: Date;
  email: string | null;
  fullName: string | null;
  id: string;
  language?: "English" | null;
  parents?: Array<Parent>;
  profilePicUrl: string | null;
  roles: JsonValue;
  stafs?: Array<Staf>;
  students?: Array<Student>;
  updatedAt: Date;
  username: string;
};
