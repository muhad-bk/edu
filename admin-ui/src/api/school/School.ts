import { Subscription } from "../subscription/Subscription";
import { Role } from "../role/Role";
import { Staf } from "../staf/Staf";
import { Student } from "../student/Student";

export type School = {
  activeSuscription?: Subscription | null;
  createdAt: Date;
  id: string;
  name: string | null;
  roles?: Array<Role>;
  schoolDistrict?: "A" | null;
  stafs?: Array<Staf>;
  state?: "Sate_1" | "State_2";
  students?: Array<Student>;
  SubscriptionHistory?: Array<Subscription>;
  township?: "T1" | "T2";
  updatedAt: Date;
};
