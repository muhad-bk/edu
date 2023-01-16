import { RecordCreateNestedManyWithoutStudentsInput } from "./RecordCreateNestedManyWithoutStudentsInput";
import { SchoolWhereUniqueInput } from "../school/SchoolWhereUniqueInput";

export type StudentCreateInput = {
  address?: string | null;
  name: string;
  records?: RecordCreateNestedManyWithoutStudentsInput;
  school?: SchoolWhereUniqueInput | null;
  studentId?: string | null;
};
