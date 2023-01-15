import { School } from "../school/School";

export type SchoolDistrict = {
  createdAt: Date;
  id: string;
  schools?: Array<School>;
  updatedAt: Date;
};
