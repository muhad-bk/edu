import { SubscriptionWhereUniqueInput } from "../subscription/SubscriptionWhereUniqueInput";
import { ChartVistUpdateManyWithoutSchoolsInput } from "./ChartVistUpdateManyWithoutSchoolsInput";
import { ParentWhereUniqueInput } from "../parent/ParentWhereUniqueInput";
import { RoleUpdateManyWithoutSchoolsInput } from "./RoleUpdateManyWithoutSchoolsInput";
import { SchoolDistrictWhereUniqueInput } from "../schoolDistrict/SchoolDistrictWhereUniqueInput";
import { StafUpdateManyWithoutSchoolsInput } from "./StafUpdateManyWithoutSchoolsInput";
import { StudentUpdateManyWithoutSchoolsInput } from "./StudentUpdateManyWithoutSchoolsInput";
import { SubscriptionUpdateManyWithoutSchoolsInput } from "./SubscriptionUpdateManyWithoutSchoolsInput";

export type SchoolUpdateInput = {
  activeSuscription?: SubscriptionWhereUniqueInput | null;
  chartVists?: ChartVistUpdateManyWithoutSchoolsInput;
  name?: string | null;
  parent?: ParentWhereUniqueInput | null;
  roles?: RoleUpdateManyWithoutSchoolsInput;
  schoolDistrict?: SchoolDistrictWhereUniqueInput | null;
  stafs?: StafUpdateManyWithoutSchoolsInput;
  state?: "Sate_1" | "State_2";
  students?: StudentUpdateManyWithoutSchoolsInput;
  SubscriptionHistory?: SubscriptionUpdateManyWithoutSchoolsInput;
  township?: "T1" | "T2";
};
