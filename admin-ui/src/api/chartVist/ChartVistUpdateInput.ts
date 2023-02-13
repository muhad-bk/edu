import { MedicalRecordUpdateManyWithoutChartVistsInput } from "./MedicalRecordUpdateManyWithoutChartVistsInput";
import { MedicalRecord } from "../medicalRecord/MedicalRecord";
import { SchoolWhereUniqueInput } from "../school/SchoolWhereUniqueInput";
import { StafWhereUniqueInput } from "../staf/StafWhereUniqueInput";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type ChartVistUpdateInput = {
  chartType?: "Type_1" | "Type_2";
  endTime?: string | null;
  MedicalRecord?: MedicalRecordUpdateManyWithoutChartVistsInput;
  school?: SchoolWhereUniqueInput | null;
  staf?: StafWhereUniqueInput | null;
  startTime?: Date | null;
  student?: StudentWhereUniqueInput | null;
};
