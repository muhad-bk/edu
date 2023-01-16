import { ParentUpdateManyWithoutApprovalsInput } from "./ParentUpdateManyWithoutApprovalsInput";
import { TreatmentWhereUniqueInput } from "../treatment/TreatmentWhereUniqueInput";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type ApprovalUpdateInput = {
  approvedBy?: ParentUpdateManyWithoutApprovalsInput;
  authorisationLetter?: string | null;
  description?: string | null;
  record?: TreatmentWhereUniqueInput | null;
  student?: StudentWhereUniqueInput | null;
};
