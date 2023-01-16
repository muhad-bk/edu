import { Record } from "../record/Record";
import { School } from "../school/School";

export type Student = {
  address: string | null;
  createdAt: Date;
  id: string;
  name: string;
  records?: Array<Record>;
  school?: School | null;
  studentId: string | null;
  updatedAt: Date;
};
