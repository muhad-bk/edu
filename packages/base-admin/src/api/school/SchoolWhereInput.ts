import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ChartVistListRelationFilter } from "../chartVist/ChartVistListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ParentWhereUniqueInput } from "../parent/ParentWhereUniqueInput";
import { RoleListRelationFilter } from "../role/RoleListRelationFilter";
import { SchoolDistrictWhereUniqueInput } from "../schoolDistrict/SchoolDistrictWhereUniqueInput";
import { StafListRelationFilter } from "../staf/StafListRelationFilter";
import { StudentListRelationFilter } from "../student/StudentListRelationFilter";

export type SchoolWhereInput = {
  abbreviation?: StringNullableFilter;
  address?: StringNullableFilter;
  chartVists?: ChartVistListRelationFilter;
  id?: StringFilter;
  logoUrl?: StringNullableFilter;
  name?: StringNullableFilter;
  parent?: ParentWhereUniqueInput;
  roles?: RoleListRelationFilter;
  schoolCode?: StringFilter;
  schoolDistrict?: SchoolDistrictWhereUniqueInput;
  stafs?: StafListRelationFilter;
  state?: "Sate_1" | "State_2";
  status?: "Active" | "Deactivate" | "Pending";
  students?: StudentListRelationFilter;
  township?: "T1" | "T2";
};
