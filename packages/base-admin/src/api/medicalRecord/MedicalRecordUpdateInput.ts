import { ApprovalWhereUniqueInput } from "../approval/ApprovalWhereUniqueInput";
import { ChartVistWhereUniqueInput } from "../chartVist/ChartVistWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type MedicalRecordUpdateInput = {
  approval?: ApprovalWhereUniqueInput | null;
  category?:
    | "Immunisation"
    | "Treatment"
    | "Medication"
    | "MandatoryScreening"
    | null;
  chartVist?: ChartVistWhereUniqueInput | null;
  generalDetails?: InputJsonValue;
  medicationDetails?: InputJsonValue;
  student?: StudentWhereUniqueInput | null;
  timingDetails?: InputJsonValue;
  treatmentDetails?: InputJsonValue;
};
