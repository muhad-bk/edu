import { PermissionCreateNestedManyWithoutRolesInput } from "./PermissionCreateNestedManyWithoutRolesInput";
import { SchoolDistrictCreateNestedManyWithoutRolesInput } from "./SchoolDistrictCreateNestedManyWithoutRolesInput";
import { SchoolCreateNestedManyWithoutRolesInput } from "./SchoolCreateNestedManyWithoutRolesInput";
import { StafCreateNestedManyWithoutRolesInput } from "./StafCreateNestedManyWithoutRolesInput";

export type RoleCreateInput = {
  name?: string | null;
  permissions?: PermissionCreateNestedManyWithoutRolesInput;
  schoolDistricts?: SchoolDistrictCreateNestedManyWithoutRolesInput;
  schools?: SchoolCreateNestedManyWithoutRolesInput;
  stafs?: StafCreateNestedManyWithoutRolesInput;
};
