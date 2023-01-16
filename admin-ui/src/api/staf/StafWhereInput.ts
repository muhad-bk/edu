import { ChartVistListRelationFilter } from "../chartVist/ChartVistListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { SchoolListRelationFilter } from "../school/SchoolListRelationFilter";
import { SchoolDistrictWhereUniqueInput } from "../schoolDistrict/SchoolDistrictWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type StafWhereInput = {
  chartVists?: ChartVistListRelationFilter;
  id?: StringFilter;
  school?: SchoolListRelationFilter;
  schoolDistricts?: SchoolDistrictWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
