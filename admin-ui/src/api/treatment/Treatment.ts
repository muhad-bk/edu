import { Approval } from "../approval/Approval";
import { ChartVist } from "../chartVist/ChartVist";
import { JsonValue } from "type-fest";
import { Student } from "../student/Student";

export type Treatment = {
  approval?: Approval | null;
  category?:
    | "Immunisation"
    | "Treatment"
    | "Medication"
    | "MandatoryScreening"
    | null;
  chartVist?: ChartVist | null;
  createdAt: Date;
  generalDetails: JsonValue;
  id: string;
  medicationDetails: JsonValue;
  student?: Student | null;
  timingDetails: JsonValue;
  treatmentDetails: JsonValue;
  updatedAt: Date;
};
