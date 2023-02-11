import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MedicalRecordListRelationFilter } from "../medicalRecord/MedicalRecordListRelationFilter";
import { MedicalRecord } from "../medicalRecord/MedicalRecord";
import { SchoolWhereUniqueInput } from "../school/SchoolWhereUniqueInput";
import { StafWhereUniqueInput } from "../staf/StafWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type ChartVistWhereInput = {
  chartType?: "Type_1" | "Type_2";
  endTime?: StringNullableFilter;
  id?: StringFilter;
  MedicalRecord?: MedicalRecordListRelationFilter;
  school?: SchoolWhereUniqueInput;
  staf?: StafWhereUniqueInput;
  startTime?: DateTimeNullableFilter;
  student?: StudentWhereUniqueInput;
};
