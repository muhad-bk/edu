import { StringFilter } from "../../util/StringFilter";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type RecordWhereInput = {
  id?: StringFilter;
  student?: StudentWhereUniqueInput;
};
