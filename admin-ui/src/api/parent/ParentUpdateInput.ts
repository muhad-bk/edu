import { ApprovalUpdateManyWithoutParentsInput } from "./ApprovalUpdateManyWithoutParentsInput";
import { SchoolUpdateManyWithoutParentsInput } from "./SchoolUpdateManyWithoutParentsInput";
import { StudentUpdateManyWithoutParentsInput } from "./StudentUpdateManyWithoutParentsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ParentUpdateInput = {
  approvals?: ApprovalUpdateManyWithoutParentsInput;
  name?: string;
  schools?: SchoolUpdateManyWithoutParentsInput;
  students?: StudentUpdateManyWithoutParentsInput;
  user?: UserWhereUniqueInput | null;
};
