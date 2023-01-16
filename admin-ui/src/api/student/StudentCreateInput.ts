import { ParentCreateNestedManyWithoutStudentsInput } from "./ParentCreateNestedManyWithoutStudentsInput";
import { RecordCreateNestedManyWithoutStudentsInput } from "./RecordCreateNestedManyWithoutStudentsInput";
import { SchoolWhereUniqueInput } from "../school/SchoolWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type StudentCreateInput = {
  address?: string | null;
  name: string;
  parent?: ParentCreateNestedManyWithoutStudentsInput;
  records?: RecordCreateNestedManyWithoutStudentsInput;
  school: SchoolWhereUniqueInput;
  studentId?: string | null;
  user: UserWhereUniqueInput;
};
