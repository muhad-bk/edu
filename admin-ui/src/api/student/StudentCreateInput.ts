import { ApprovalCreateNestedManyWithoutStudentsInput } from "./ApprovalCreateNestedManyWithoutStudentsInput";
import { ChartVistCreateNestedManyWithoutStudentsInput } from "./ChartVistCreateNestedManyWithoutStudentsInput";
import { InputJsonValue } from "../../types";
import { ParentCreateNestedManyWithoutStudentsInput } from "./ParentCreateNestedManyWithoutStudentsInput";
import { TreatmentCreateNestedManyWithoutStudentsInput } from "./TreatmentCreateNestedManyWithoutStudentsInput";
import { SchoolWhereUniqueInput } from "../school/SchoolWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type StudentCreateInput = {
  address?: string | null;
  approvals?: ApprovalCreateNestedManyWithoutStudentsInput;
  chartVists?: ChartVistCreateNestedManyWithoutStudentsInput;
  contactDetails?: InputJsonValue;
  generalDetails?: InputJsonValue;
  name: string;
  parent?: ParentCreateNestedManyWithoutStudentsInput;
  records?: TreatmentCreateNestedManyWithoutStudentsInput;
  school: SchoolWhereUniqueInput;
  status?: "Active" | "Deactivate" | "Pending" | null;
  studentId?: string | null;
  user: UserWhereUniqueInput;
};
