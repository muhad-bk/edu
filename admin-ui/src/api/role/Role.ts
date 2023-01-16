import { Permission } from "../permission/Permission";
import { SchoolDistrict } from "../schoolDistrict/SchoolDistrict";
import { School } from "../school/School";
import { Staf } from "../staf/Staf";

export type Role = {
  createdAt: Date;
  id: string;
  name: string | null;
  permissions?: Array<Permission>;
  schoolDistricts?: Array<SchoolDistrict>;
  schools?: Array<School>;
  stafs?: Array<Staf>;
  updatedAt: Date;
};
