import { InputJsonValue } from "../../types";
import { StafUpdateManyWithoutUsersInput } from "./StafUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  fullName?: string | null;
  language?: "English" | null;
  password?: string;
  profilePicUrl?: string | null;
  roles?: InputJsonValue;
  stafs?: StafUpdateManyWithoutUsersInput;
  username?: string;
};
