import { SubscriptionWhereUniqueInput } from "../subscription/SubscriptionWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { RoleListRelationFilter } from "../role/RoleListRelationFilter";
import { StafListRelationFilter } from "../staf/StafListRelationFilter";
import { StudentListRelationFilter } from "../student/StudentListRelationFilter";
import { SubscriptionListRelationFilter } from "../subscription/SubscriptionListRelationFilter";

export type SchoolWhereInput = {
  activeSuscription?: SubscriptionWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
  roles?: RoleListRelationFilter;
  schoolDistrict?: "A";
  stafs?: StafListRelationFilter;
  state?: "Sate_1" | "State_2";
  students?: StudentListRelationFilter;
  SubscriptionHistory?: SubscriptionListRelationFilter;
  township?: "T1" | "T2";
};
