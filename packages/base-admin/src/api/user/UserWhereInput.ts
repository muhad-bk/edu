import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ParentListRelationFilter } from "../parent/ParentListRelationFilter";
import { StafListRelationFilter } from "../staf/StafListRelationFilter";
import { StudentListRelationFilter } from "../student/StudentListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  fullName?: StringNullableFilter;
  id?: StringFilter;
  language?: "English";
  parents?: ParentListRelationFilter;
  profilePicUrl?: StringNullableFilter;
  stafs?: StafListRelationFilter;
  students?: StudentListRelationFilter;
  username?: StringFilter;
};
