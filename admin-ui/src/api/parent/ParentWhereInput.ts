import { StringFilter } from "../../util/StringFilter";
import { SchoolListRelationFilter } from "../school/SchoolListRelationFilter";
import { StudentListRelationFilter } from "../student/StudentListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ParentWhereInput = {
  id?: StringFilter;
  name?: StringFilter;
  schools?: SchoolListRelationFilter;
  students?: StudentListRelationFilter;
  user?: UserWhereUniqueInput;
};
