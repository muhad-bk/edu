import { MedicalRecordCreateNestedManyWithoutChartVistsInput } from "./MedicalRecordCreateNestedManyWithoutChartVistsInput";
import { MedicalRecord } from "../medicalRecord/MedicalRecord";
import { SchoolWhereUniqueInput } from "../school/SchoolWhereUniqueInput";
import { StafWhereUniqueInput } from "../staf/StafWhereUniqueInput";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type ChartVistCreateInput = {
  chartType: "Type_1" | "Type_2";
  endTime?: string | null;
  MedicalRecord?: MedicalRecordCreateNestedManyWithoutChartVistsInput;
  school?: SchoolWhereUniqueInput | null;
  staf?: StafWhereUniqueInput | null;
  startTime?: Date | null;
  student?: StudentWhereUniqueInput | null;
};
