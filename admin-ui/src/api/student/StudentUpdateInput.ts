import { ApprovalUpdateManyWithoutStudentsInput } from "./ApprovalUpdateManyWithoutStudentsInput";
import { ChartVistUpdateManyWithoutStudentsInput } from "./ChartVistUpdateManyWithoutStudentsInput";
import { ParentUpdateManyWithoutStudentsInput } from "./ParentUpdateManyWithoutStudentsInput";
import { TreatmentUpdateManyWithoutStudentsInput } from "./TreatmentUpdateManyWithoutStudentsInput";
import { SchoolWhereUniqueInput } from "../school/SchoolWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type StudentUpdateInput = {
  address?: string | null;
  approvals?: ApprovalUpdateManyWithoutStudentsInput;
  chartVists?: ChartVistUpdateManyWithoutStudentsInput;
  name?: string;
  parent?: ParentUpdateManyWithoutStudentsInput;
  records?: TreatmentUpdateManyWithoutStudentsInput;
  school?: SchoolWhereUniqueInput;
  status?: "Active" | "Deactivate" | "Pending" | null;
  studentId?: string | null;
  user?: UserWhereUniqueInput;
};
