import { StringFilter } from "../../util/StringFilter";
import { SchoolListRelationFilter } from "../school/SchoolListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type StafWhereInput = {
  id?: StringFilter;
  school?: SchoolListRelationFilter;
  user?: UserWhereUniqueInput;
};
