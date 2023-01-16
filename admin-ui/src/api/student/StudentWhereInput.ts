import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ParentListRelationFilter } from "../parent/ParentListRelationFilter";
import { RecordListRelationFilter } from "../record/RecordListRelationFilter";
import { SchoolWhereUniqueInput } from "../school/SchoolWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type StudentWhereInput = {
  address?: StringNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
  parent?: ParentListRelationFilter;
  records?: RecordListRelationFilter;
  school?: SchoolWhereUniqueInput;
  studentId?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
