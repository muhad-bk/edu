import { PermissionUpdateManyWithoutRolesInput } from "./PermissionUpdateManyWithoutRolesInput";
import { SchoolDistrictUpdateManyWithoutRolesInput } from "./SchoolDistrictUpdateManyWithoutRolesInput";
import { SchoolUpdateManyWithoutRolesInput } from "./SchoolUpdateManyWithoutRolesInput";
import { StafUpdateManyWithoutRolesInput } from "./StafUpdateManyWithoutRolesInput";

export type RoleUpdateInput = {
  name?: string | null;
  permissions?: PermissionUpdateManyWithoutRolesInput;
  schoolDistricts?: SchoolDistrictUpdateManyWithoutRolesInput;
  schools?: SchoolUpdateManyWithoutRolesInput;
  stafs?: StafUpdateManyWithoutRolesInput;
};
