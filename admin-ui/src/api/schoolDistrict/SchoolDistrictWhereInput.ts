import { StringFilter } from "../../util/StringFilter";
import { SchoolListRelationFilter } from "../school/SchoolListRelationFilter";
import { StafListRelationFilter } from "../staf/StafListRelationFilter";

export type SchoolDistrictWhereInput = {
  id?: StringFilter;
  name?: StringFilter;
  schools?: SchoolListRelationFilter;
  stafs?: StafListRelationFilter;
};
