import { School } from "../school/School";
import { Staf } from "../staf/Staf";
import { Student } from "../student/Student";
import { Treatment } from "../treatment/Treatment";

export type ChartVist = {
  chartType?: "Type_1" | "Type_2";
  createdAt: Date;
  endTime: string | null;
  id: string;
  school?: School | null;
  staf?: Staf | null;
  startTime: Date | null;
  student?: Student | null;
  treatments?: Array<Treatment>;
  updatedAt: Date;
};
