import { InputJsonValue } from "../../types";
import { StafUpdateManyWithoutUsersInput } from "./StafUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  stafs?: StafUpdateManyWithoutUsersInput;
  username?: string;
};
