import { SubscriptionWhereUniqueInput } from "../subscription/SubscriptionWhereUniqueInput";
import { RoleUpdateManyWithoutSchoolsInput } from "./RoleUpdateManyWithoutSchoolsInput";
import { StafUpdateManyWithoutSchoolsInput } from "./StafUpdateManyWithoutSchoolsInput";
import { SubscriptionUpdateManyWithoutSchoolsInput } from "./SubscriptionUpdateManyWithoutSchoolsInput";

export type SchoolUpdateInput = {
  activeSuscription?: SubscriptionWhereUniqueInput | null;
  name?: string | null;
  roles?: RoleUpdateManyWithoutSchoolsInput;
  schoolDistrict?: "A" | null;
  stafs?: StafUpdateManyWithoutSchoolsInput;
  state?: "Sate_1" | "State_2";
  SubscriptionHistory?: SubscriptionUpdateManyWithoutSchoolsInput;
  township?: "T1" | "T2";
};
