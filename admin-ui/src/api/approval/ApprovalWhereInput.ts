import { ParentListRelationFilter } from "../parent/ParentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MedicalRecordWhereUniqueInput } from "../medicalRecord/MedicalRecordWhereUniqueInput";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type ApprovalWhereInput = {
  approvedBy?: ParentListRelationFilter;
  authorisationLetter?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  record?: MedicalRecordWhereUniqueInput;
  student?: StudentWhereUniqueInput;
};
