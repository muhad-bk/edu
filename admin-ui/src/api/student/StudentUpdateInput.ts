import { RecordUpdateManyWithoutStudentsInput } from "./RecordUpdateManyWithoutStudentsInput";
import { SchoolWhereUniqueInput } from "../school/SchoolWhereUniqueInput";

export type StudentUpdateInput = {
  address?: string | null;
  name?: string;
  records?: RecordUpdateManyWithoutStudentsInput;
  school?: SchoolWhereUniqueInput | null;
  studentId?: string | null;
};
