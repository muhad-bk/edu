import { Parent } from "../parent/Parent";
import { Treatment } from "../treatment/Treatment";
import { Student } from "../student/Student";

export type Approval = {
  approvedBy?: Array<Parent>;
  authorisationLetter: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  record?: Treatment | null;
  student?: Student | null;
  updatedAt: Date;
};
