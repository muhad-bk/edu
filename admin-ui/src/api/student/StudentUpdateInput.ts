import { ParentUpdateManyWithoutStudentsInput } from "./ParentUpdateManyWithoutStudentsInput";
import { RecordUpdateManyWithoutStudentsInput } from "./RecordUpdateManyWithoutStudentsInput";
import { SchoolWhereUniqueInput } from "../school/SchoolWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type StudentUpdateInput = {
  address?: string | null;
  name?: string;
  parent?: ParentUpdateManyWithoutStudentsInput;
  records?: RecordUpdateManyWithoutStudentsInput;
  school?: SchoolWhereUniqueInput;
  studentId?: string | null;
  user?: UserWhereUniqueInput;
};
