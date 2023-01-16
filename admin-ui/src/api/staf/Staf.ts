import { School } from "../school/School";
import { SchoolDistrict } from "../schoolDistrict/SchoolDistrict";
import { User } from "../user/User";

export type Staf = {
  createdAt: Date;
  id: string;
  school?: Array<School>;
  schoolDistricts?: SchoolDistrict | null;
  updatedAt: Date;
  user?: User;
};
