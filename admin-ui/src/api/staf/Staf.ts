import { ChartVist } from "../chartVist/ChartVist";
import { Role } from "../role/Role";
import { School } from "../school/School";
import { SchoolDistrict } from "../schoolDistrict/SchoolDistrict";
import { User } from "../user/User";

export type Staf = {
  address: string | null;
  chartVists?: Array<ChartVist>;
  contactDetails: string | null;
  createdAt: Date;
  destignation: string | null;
  fullName: string | null;
  gender?: "Male" | "Female" | "NotSpecified" | null;
  id: string;
  idNumber: string | null;
  officialEmail: string | null;
  race: string | null;
  role?: Role | null;
  school?: Array<School>;
  schoolDistricts?: SchoolDistrict | null;
  status?: "Active" | "Deactivate" | "Pending" | null;
  updatedAt: Date;
  user?: User;
};
