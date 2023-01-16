import { School } from "../school/School";
import { Staf } from "../staf/Staf";

export type SchoolDistrict = {
  createdAt: Date;
  id: string;
  name: string;
  schools?: Array<School>;
  stafs?: Array<Staf>;
  updatedAt: Date;
};
