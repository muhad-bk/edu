import { StringFilter } from "../../util/StringFilter";
import { SchoolListRelationFilter } from "../school/SchoolListRelationFilter";
import { SchoolDistrictWhereUniqueInput } from "../schoolDistrict/SchoolDistrictWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type StafWhereInput = {
  id?: StringFilter;
  school?: SchoolListRelationFilter;
  schoolDistricts?: SchoolDistrictWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
