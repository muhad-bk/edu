import { ParentCreateNestedManyWithoutUsersInput } from "./ParentCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { StafCreateNestedManyWithoutUsersInput } from "./StafCreateNestedManyWithoutUsersInput";
import { StudentCreateNestedManyWithoutUsersInput } from "./StudentCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  fullName?: string | null;
  language?: "English" | null;
  parents?: ParentCreateNestedManyWithoutUsersInput;
  password: string;
  profilePicUrl?: string | null;
  roles: InputJsonValue;
  stafs?: StafCreateNestedManyWithoutUsersInput;
  students?: StudentCreateNestedManyWithoutUsersInput;
  username: string;
};
