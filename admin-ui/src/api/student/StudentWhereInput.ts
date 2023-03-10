import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ApprovalListRelationFilter } from "../approval/ApprovalListRelationFilter";
import { ChartVistListRelationFilter } from "../chartVist/ChartVistListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { ParentListRelationFilter } from "../parent/ParentListRelationFilter";
import { MedicalRecordListRelationFilter } from "../medicalRecord/MedicalRecordListRelationFilter";
import { SchoolWhereUniqueInput } from "../school/SchoolWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type StudentWhereInput = {
  address?: StringNullableFilter;
  approvals?: ApprovalListRelationFilter;
  chartVists?: ChartVistListRelationFilter;
  contactDetails?: JsonFilter;
  generalDetails?: JsonFilter;
  id?: StringFilter;
  name?: StringFilter;
  parent?: ParentListRelationFilter;
  records?: MedicalRecordListRelationFilter;
  school?: SchoolWhereUniqueInput;
  status?: "Active" | "Deactivate" | "Pending";
  studentId?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
