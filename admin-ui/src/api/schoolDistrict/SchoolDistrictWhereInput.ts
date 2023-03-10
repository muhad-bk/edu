import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RoleListRelationFilter } from "../role/RoleListRelationFilter";
import { SchoolListRelationFilter } from "../school/SchoolListRelationFilter";
import { StafListRelationFilter } from "../staf/StafListRelationFilter";
import { SubscriptionWhereUniqueInput } from "../subscription/SubscriptionWhereUniqueInput";

export type SchoolDistrictWhereInput = {
  address?: StringNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
  roles?: RoleListRelationFilter;
  schools?: SchoolListRelationFilter;
  stafs?: StafListRelationFilter;
  subscription?: SubscriptionWhereUniqueInput;
};
