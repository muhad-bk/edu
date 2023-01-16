import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ApprovalListRelationFilter } from "../approval/ApprovalListRelationFilter";
import { ChartVistListRelationFilter } from "../chartVist/ChartVistListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ParentListRelationFilter } from "../parent/ParentListRelationFilter";
import { TreatmentListRelationFilter } from "../treatment/TreatmentListRelationFilter";
import { SchoolWhereUniqueInput } from "../school/SchoolWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type StudentWhereInput = {
  address?: StringNullableFilter;
  approvals?: ApprovalListRelationFilter;
  chartVists?: ChartVistListRelationFilter;
  id?: StringFilter;
  name?: StringFilter;
  parent?: ParentListRelationFilter;
  records?: TreatmentListRelationFilter;
  school?: SchoolWhereUniqueInput;
  status?: "Active" | "Deactivate" | "Pending";
  studentId?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
