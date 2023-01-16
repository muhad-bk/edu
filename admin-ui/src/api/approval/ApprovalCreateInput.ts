import { ParentCreateNestedManyWithoutApprovalsInput } from "./ParentCreateNestedManyWithoutApprovalsInput";
import { TreatmentWhereUniqueInput } from "../treatment/TreatmentWhereUniqueInput";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type ApprovalCreateInput = {
  approvedBy?: ParentCreateNestedManyWithoutApprovalsInput;
  authorisationLetter?: string | null;
  description?: string | null;
  record: TreatmentWhereUniqueInput | null;
  student?: StudentWhereUniqueInput | null;
};
