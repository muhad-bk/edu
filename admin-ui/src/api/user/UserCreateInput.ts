import { InputJsonValue } from "../../types";
import { StafCreateNestedManyWithoutUsersInput } from "./StafCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  fullName?: string | null;
  language?: "English" | null;
  password: string;
  profilePicUrl?: string | null;
  roles: InputJsonValue;
  stafs?: StafCreateNestedManyWithoutUsersInput;
  username: string;
};
