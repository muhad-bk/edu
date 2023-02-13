import { ChartVist } from "../chartVist/ChartVist";
import { Parent } from "../parent/Parent";
import { Role } from "../role/Role";
import { SchoolDistrict } from "../schoolDistrict/SchoolDistrict";
import { Staf } from "../staf/Staf";
import { Student } from "../student/Student";

export type School = {
  abbreviation: string | null;
  address: string | null;
  chartVists?: Array<ChartVist>;
  createdAt: Date;
  id: string;
  logoUrl: string | null;
  name: string | null;
  parent?: Parent | null;
  roles?: Array<Role>;
  schoolCode: string;
  schoolDistrict?: SchoolDistrict | null;
  stafs?: Array<Staf>;
  state?: "Sate_1" | "State_2";
  status?: "Active" | "Deactivate" | "Pending" | null;
  students?: Array<Student>;
  township?: "T1" | "T2";
  updatedAt: Date;
};
