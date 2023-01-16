import { ChartVist } from "../chartVist/ChartVist";
import { School } from "../school/School";
import { SchoolDistrict } from "../schoolDistrict/SchoolDistrict";
import { User } from "../user/User";

export type Staf = {
  chartVists?: Array<ChartVist>;
  createdAt: Date;
  id: string;
  school?: Array<School>;
  schoolDistricts?: SchoolDistrict | null;
  updatedAt: Date;
  user?: User;
};
