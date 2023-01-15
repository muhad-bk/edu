import { SubscriptionWhereUniqueInput } from "../subscription/SubscriptionWhereUniqueInput";
import { SchoolDistrictWhereUniqueInput } from "../schoolDistrict/SchoolDistrictWhereUniqueInput";
import { SubscriptionCreateNestedManyWithoutSchoolsInput } from "./SubscriptionCreateNestedManyWithoutSchoolsInput";

export type SchoolCreateInput = {
  activeSuscription?: SubscriptionWhereUniqueInput | null;
  name?: string | null;
  schoolDistrict?: SchoolDistrictWhereUniqueInput | null;
  SubscriptionHistory?: SubscriptionCreateNestedManyWithoutSchoolsInput;
};
