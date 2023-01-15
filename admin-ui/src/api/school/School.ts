import { Subscription } from "../subscription/Subscription";
import { SchoolDistrict } from "../schoolDistrict/SchoolDistrict";

export type School = {
  activeSuscription?: Subscription | null;
  createdAt: Date;
  id: string;
  name: string | null;
  schoolDistrict?: SchoolDistrict | null;
  SubscriptionHistory?: Array<Subscription>;
  updatedAt: Date;
};
