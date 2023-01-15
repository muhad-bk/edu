import { InputJsonValue } from "../../types";
import { StafCreateNestedManyWithoutUsersInput } from "./StafCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  stafs?: StafCreateNestedManyWithoutUsersInput;
  username: string;
};
