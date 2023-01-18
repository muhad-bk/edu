import { ApprovalUpdateManyWithoutStudentsInput } from "./ApprovalUpdateManyWithoutStudentsInput";
import { ChartVistUpdateManyWithoutStudentsInput } from "./ChartVistUpdateManyWithoutStudentsInput";
import { InputJsonValue } from "../../types";
import { ParentUpdateManyWithoutStudentsInput } from "./ParentUpdateManyWithoutStudentsInput";
import { MedicalRecordUpdateManyWithoutStudentsInput } from "./MedicalRecordUpdateManyWithoutStudentsInput";
import { SchoolWhereUniqueInput } from "../school/SchoolWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type StudentUpdateInput = {
  address?: string | null;
  approvals?: ApprovalUpdateManyWithoutStudentsInput;
  chartVists?: ChartVistUpdateManyWithoutStudentsInput;
  contactDetails?: InputJsonValue;
  generalDetails?: InputJsonValue;
  name?: string;
  parent?: ParentUpdateManyWithoutStudentsInput;
  records?: MedicalRecordUpdateManyWithoutStudentsInput;
  school?: SchoolWhereUniqueInput;
  status?: "Active" | "Deactivate" | "Pending" | null;
  studentId?: string | null;
  user?: UserWhereUniqueInput;
};
