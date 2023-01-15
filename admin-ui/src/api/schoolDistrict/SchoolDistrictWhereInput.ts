import { StringFilter } from "../../util/StringFilter";
import { SchoolListRelationFilter } from "../school/SchoolListRelationFilter";

export type SchoolDistrictWhereInput = {
  id?: StringFilter;
  schools?: SchoolListRelationFilter;
};
