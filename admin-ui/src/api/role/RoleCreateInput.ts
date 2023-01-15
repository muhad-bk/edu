import { PermissionCreateNestedManyWithoutRolesInput } from "./PermissionCreateNestedManyWithoutRolesInput";
import { SchoolCreateNestedManyWithoutRolesInput } from "./SchoolCreateNestedManyWithoutRolesInput";

export type RoleCreateInput = {
  name?: string | null;
  permissions?: PermissionCreateNestedManyWithoutRolesInput;
  school?: SchoolCreateNestedManyWithoutRolesInput;
};
