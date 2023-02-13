import { ParentUpdateManyWithoutUsersInput } from "./ParentUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { StafUpdateManyWithoutUsersInput } from "./StafUpdateManyWithoutUsersInput";
import { StudentUpdateManyWithoutUsersInput } from "./StudentUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  fullName?: string | null;
  language?: "English" | null;
  parents?: ParentUpdateManyWithoutUsersInput;
  password?: string;
  profilePicUrl?: string | null;
  roles?: InputJsonValue;
  stafs?: StafUpdateManyWithoutUsersInput;
  students?: StudentUpdateManyWithoutUsersInput;
  username?: string;
};
