import { Approval } from "../approval/Approval";
import { School } from "../school/School";
import { Student } from "../student/Student";
import { User } from "../user/User";

export type Parent = {
  approvals?: Array<Approval>;
  createdAt: Date;
  id: string;
  name: string;
  schools?: Array<School>;
  students?: Array<Student>;
  updatedAt: Date;
  user?: User | null;
};
