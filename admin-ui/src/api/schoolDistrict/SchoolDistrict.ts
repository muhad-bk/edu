import { Role } from "../role/Role";
import { School } from "../school/School";
import { Staf } from "../staf/Staf";
import { Subscription } from "../subscription/Subscription";

export type SchoolDistrict = {
  createdAt: Date;
  id: string;
  name: string;
  roles?: Array<Role>;
  schools?: Array<School>;
  stafs?: Array<Staf>;
  subscription?: Subscription | null;
  updatedAt: Date;
};
