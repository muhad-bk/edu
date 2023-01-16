import { ApprovalCreateNestedManyWithoutParentsInput } from "./ApprovalCreateNestedManyWithoutParentsInput";
import { SchoolCreateNestedManyWithoutParentsInput } from "./SchoolCreateNestedManyWithoutParentsInput";
import { StudentCreateNestedManyWithoutParentsInput } from "./StudentCreateNestedManyWithoutParentsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ParentCreateInput = {
  approvals?: ApprovalCreateNestedManyWithoutParentsInput;
  name: string;
  schools?: SchoolCreateNestedManyWithoutParentsInput;
  students?: StudentCreateNestedManyWithoutParentsInput;
  user?: UserWhereUniqueInput | null;
};
