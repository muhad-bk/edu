import { ApprovalWhereUniqueInput } from "../approval/ApprovalWhereUniqueInput";
import { ChartVistWhereUniqueInput } from "../chartVist/ChartVistWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type TreatmentWhereInput = {
  approval?: ApprovalWhereUniqueInput;
  chartVist?: ChartVistWhereUniqueInput;
  generalDetails?: JsonFilter;
  id?: StringFilter;
  medicationDetails?: JsonFilter;
  student?: StudentWhereUniqueInput;
  timingDetails?: JsonFilter;
  treatmentDetails?: JsonFilter;
};
