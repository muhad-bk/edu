import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PermissionListRelationFilter } from "../permission/PermissionListRelationFilter";
import { SchoolDistrictListRelationFilter } from "../schoolDistrict/SchoolDistrictListRelationFilter";
import { SchoolListRelationFilter } from "../school/SchoolListRelationFilter";
import { StafListRelationFilter } from "../staf/StafListRelationFilter";

export type RoleWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  permissions?: PermissionListRelationFilter;
  schoolDistricts?: SchoolDistrictListRelationFilter;
  schools?: SchoolListRelationFilter;
  stafs?: StafListRelationFilter;
};
