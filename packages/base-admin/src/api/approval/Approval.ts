import { Parent } from "../parent/Parent";
import { MedicalRecord } from "../medicalRecord/MedicalRecord";
import { Student } from "../student/Student";

export type Approval = {
  approvedBy?: Array<Parent>;
  authorisationLetter: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  record?: MedicalRecord | null;
  student?: Student | null;
  updatedAt: Date;
};
