import { SchoolWhereUniqueInput } from "../school/SchoolWhereUniqueInput";
import { StafWhereUniqueInput } from "../staf/StafWhereUniqueInput";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";
import { TreatmentUpdateManyWithoutChartVistsInput } from "./TreatmentUpdateManyWithoutChartVistsInput";

export type ChartVistUpdateInput = {
  chartType?: "Type_1" | "Type_2";
  endTime?: string | null;
  school?: SchoolWhereUniqueInput | null;
  staf?: StafWhereUniqueInput | null;
  startTime?: Date | null;
  student?: StudentWhereUniqueInput | null;
  treatments?: TreatmentUpdateManyWithoutChartVistsInput;
};
