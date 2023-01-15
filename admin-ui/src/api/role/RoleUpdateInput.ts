import { PermissionUpdateManyWithoutRolesInput } from "./PermissionUpdateManyWithoutRolesInput";
import { SchoolUpdateManyWithoutRolesInput } from "./SchoolUpdateManyWithoutRolesInput";

export type RoleUpdateInput = {
  name?: string | null;
  permissions?: PermissionUpdateManyWithoutRolesInput;
  school?: SchoolUpdateManyWithoutRolesInput;
};
