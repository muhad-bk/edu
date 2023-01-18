import { MedicalRecord } from "../medicalRecord/MedicalRecord";
import { School } from "../school/School";
import { Staf } from "../staf/Staf";
import { Student } from "../student/Student";

export type ChartVist = {
  chartType?: "Type_1" | "Type_2";
  createdAt: Date;
  endTime: string | null;
  id: string;
  MedicalRecord?: Array<MedicalRecord>;
  school?: School | null;
  staf?: Staf | null;
  startTime: Date | null;
  student?: Student | null;
  updatedAt: Date;
};
