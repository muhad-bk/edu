import { Approval } from "../approval/Approval";
import { ChartVist } from "../chartVist/ChartVist";
import { Parent } from "../parent/Parent";
import { Treatment } from "../treatment/Treatment";
import { School } from "../school/School";
import { User } from "../user/User";

export type Student = {
  address: string | null;
  approvals?: Array<Approval>;
  chartVists?: Array<ChartVist>;
  createdAt: Date;
  id: string;
  name: string;
  parent?: Array<Parent>;
  records?: Array<Treatment>;
  school?: School;
  status?: "Active" | "Deactivate" | "Pending" | null;
  studentId: string | null;
  updatedAt: Date;
  user?: User;
};
