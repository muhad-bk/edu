import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SchoolWhereUniqueInput } from "../school/SchoolWhereUniqueInput";
import { StafWhereUniqueInput } from "../staf/StafWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";
import { TreatmentListRelationFilter } from "../treatment/TreatmentListRelationFilter";

export type ChartVistWhereInput = {
  chartType?: "Type_1" | "Type_2";
  endTime?: StringNullableFilter;
  id?: StringFilter;
  school?: SchoolWhereUniqueInput;
  staf?: StafWhereUniqueInput;
  startTime?: DateTimeNullableFilter;
  student?: StudentWhereUniqueInput;
  treatments?: TreatmentListRelationFilter;
};
