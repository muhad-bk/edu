import { SubscriptionWhereUniqueInput } from "../subscription/SubscriptionWhereUniqueInput";
import { RoleCreateNestedManyWithoutSchoolsInput } from "./RoleCreateNestedManyWithoutSchoolsInput";
import { StafCreateNestedManyWithoutSchoolsInput } from "./StafCreateNestedManyWithoutSchoolsInput";
import { StudentCreateNestedManyWithoutSchoolsInput } from "./StudentCreateNestedManyWithoutSchoolsInput";
import { SubscriptionCreateNestedManyWithoutSchoolsInput } from "./SubscriptionCreateNestedManyWithoutSchoolsInput";

export type SchoolCreateInput = {
  activeSuscription?: SubscriptionWhereUniqueInput | null;
  name?: string | null;
  roles?: RoleCreateNestedManyWithoutSchoolsInput;
  schoolDistrict?: "A" | null;
  stafs?: StafCreateNestedManyWithoutSchoolsInput;
  state: "Sate_1" | "State_2";
  students?: StudentCreateNestedManyWithoutSchoolsInput;
  SubscriptionHistory?: SubscriptionCreateNestedManyWithoutSchoolsInput;
  township: "T1" | "T2";
};
