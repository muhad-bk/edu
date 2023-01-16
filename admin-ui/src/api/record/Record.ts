import { Student } from "../student/Student";

export type Record = {
  createdAt: Date;
  id: string;
  student?: Student | null;
  updatedAt: Date;
};
