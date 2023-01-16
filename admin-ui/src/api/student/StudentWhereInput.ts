import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RecordListRelationFilter } from "../record/RecordListRelationFilter";
import { SchoolWhereUniqueInput } from "../school/SchoolWhereUniqueInput";

export type StudentWhereInput = {
  address?: StringNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
  records?: RecordListRelationFilter;
  school?: SchoolWhereUniqueInput;
  studentId?: StringNullableFilter;
};
