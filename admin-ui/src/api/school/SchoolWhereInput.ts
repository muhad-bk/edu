import { SubscriptionWhereUniqueInput } from "../subscription/SubscriptionWhereUniqueInput";
import { ChartVistListRelationFilter } from "../chartVist/ChartVistListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ParentWhereUniqueInput } from "../parent/ParentWhereUniqueInput";
import { RoleListRelationFilter } from "../role/RoleListRelationFilter";
import { SchoolDistrictWhereUniqueInput } from "../schoolDistrict/SchoolDistrictWhereUniqueInput";
import { StafListRelationFilter } from "../staf/StafListRelationFilter";
import { StudentListRelationFilter } from "../student/StudentListRelationFilter";
import { SubscriptionListRelationFilter } from "../subscription/SubscriptionListRelationFilter";

export type SchoolWhereInput = {
  activeSuscription?: SubscriptionWhereUniqueInput;
  chartVists?: ChartVistListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  parent?: ParentWhereUniqueInput;
  roles?: RoleListRelationFilter;
  schoolDistrict?: SchoolDistrictWhereUniqueInput;
  stafs?: StafListRelationFilter;
  state?: "Sate_1" | "State_2";
  students?: StudentListRelationFilter;
  SubscriptionHistory?: SubscriptionListRelationFilter;
  township?: "T1" | "T2";
};
