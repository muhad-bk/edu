import { ParentCreateNestedManyWithoutApprovalsInput } from "./ParentCreateNestedManyWithoutApprovalsInput";
import { MedicalRecordWhereUniqueInput } from "../medicalRecord/MedicalRecordWhereUniqueInput";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type ApprovalCreateInput = {
  approvedBy?: ParentCreateNestedManyWithoutApprovalsInput;
  authorisationLetter?: string | null;
  description?: string | null;
  record: MedicalRecordWhereUniqueInput | null;
  student?: StudentWhereUniqueInput | null;
};
