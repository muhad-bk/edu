import { Parent } from "../parent/Parent";
import { Record } from "../record/Record";
import { School } from "../school/School";
import { User } from "../user/User";

export type Student = {
  address: string | null;
  createdAt: Date;
  id: string;
  name: string;
  parent?: Array<Parent>;
  records?: Array<Record>;
  school?: School;
  studentId: string | null;
  updatedAt: Date;
  user?: User;
};
