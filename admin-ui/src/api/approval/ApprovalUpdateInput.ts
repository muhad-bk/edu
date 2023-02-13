import { ParentUpdateManyWithoutApprovalsInput } from "./ParentUpdateManyWithoutApprovalsInput";
import { MedicalRecordWhereUniqueInput } from "../medicalRecord/MedicalRecordWhereUniqueInput";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type ApprovalUpdateInput = {
  approvedBy?: ParentUpdateManyWithoutApprovalsInput;
  authorisationLetter?: string | null;
  description?: string | null;
  record?: MedicalRecordWhereUniqueInput | null;
  student?: StudentWhereUniqueInput | null;
};
