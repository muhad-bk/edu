import { SubscriptionWhereUniqueInput } from "../subscription/SubscriptionWhereUniqueInput";
import { ParentWhereUniqueInput } from "../parent/ParentWhereUniqueInput";
import { RoleCreateNestedManyWithoutSchoolsInput } from "./RoleCreateNestedManyWithoutSchoolsInput";
import { SchoolDistrictWhereUniqueInput } from "../schoolDistrict/SchoolDistrictWhereUniqueInput";
import { StafCreateNestedManyWithoutSchoolsInput } from "./StafCreateNestedManyWithoutSchoolsInput";
import { StudentCreateNestedManyWithoutSchoolsInput } from "./StudentCreateNestedManyWithoutSchoolsInput";
import { SubscriptionCreateNestedManyWithoutSchoolsInput } from "./SubscriptionCreateNestedManyWithoutSchoolsInput";

export type SchoolCreateInput = {
  activeSuscription?: SubscriptionWhereUniqueInput | null;
  name?: string | null;
  parent?: ParentWhereUniqueInput | null;
  roles?: RoleCreateNestedManyWithoutSchoolsInput;
  schoolDistrict?: SchoolDistrictWhereUniqueInput | null;
  stafs?: StafCreateNestedManyWithoutSchoolsInput;
  state: "Sate_1" | "State_2";
  students?: StudentCreateNestedManyWithoutSchoolsInput;
  SubscriptionHistory?: SubscriptionCreateNestedManyWithoutSchoolsInput;
  township: "T1" | "T2";
};
