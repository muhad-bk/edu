import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ChartVistListRelationFilter } from "../chartVist/ChartVistListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";
import { SchoolListRelationFilter } from "../school/SchoolListRelationFilter";
import { SchoolDistrictWhereUniqueInput } from "../schoolDistrict/SchoolDistrictWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type StafWhereInput = {
  address?: StringNullableFilter;
  chartVists?: ChartVistListRelationFilter;
  contactDetails?: StringNullableFilter;
  destignation?: StringNullableFilter;
  fullName?: StringNullableFilter;
  gender?: "Male" | "Female" | "NotSpecified";
  id?: StringFilter;
  idNumber?: StringNullableFilter;
  officialEmail?: StringNullableFilter;
  race?: StringNullableFilter;
  role?: RoleWhereUniqueInput;
  school?: SchoolListRelationFilter;
  schoolDistricts?: SchoolDistrictWhereUniqueInput;
  status?: "Active" | "Deactivate" | "Pending";
  user?: UserWhereUniqueInput;
};
