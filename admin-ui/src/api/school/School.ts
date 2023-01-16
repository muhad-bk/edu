import { Subscription } from "../subscription/Subscription";
import { Parent } from "../parent/Parent";
import { Role } from "../role/Role";
import { SchoolDistrict } from "../schoolDistrict/SchoolDistrict";
import { Staf } from "../staf/Staf";
import { Student } from "../student/Student";

export type School = {
  activeSuscription?: Subscription | null;
  createdAt: Date;
  id: string;
  name: string | null;
  parent?: Parent | null;
  roles?: Array<Role>;
  schoolDistrict?: SchoolDistrict | null;
  stafs?: Array<Staf>;
  state?: "Sate_1" | "State_2";
  students?: Array<Student>;
  SubscriptionHistory?: Array<Subscription>;
  township?: "T1" | "T2";
  updatedAt: Date;
};
