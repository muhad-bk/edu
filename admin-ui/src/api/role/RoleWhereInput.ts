import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PermissionListRelationFilter } from "../permission/PermissionListRelationFilter";
import { SchoolListRelationFilter } from "../school/SchoolListRelationFilter";

export type RoleWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  permissions?: PermissionListRelationFilter;
  school?: SchoolListRelationFilter;
};
