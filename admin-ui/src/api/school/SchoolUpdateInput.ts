import { SubscriptionWhereUniqueInput } from "../subscription/SubscriptionWhereUniqueInput";
import { SchoolDistrictWhereUniqueInput } from "../schoolDistrict/SchoolDistrictWhereUniqueInput";
import { SubscriptionUpdateManyWithoutSchoolsInput } from "./SubscriptionUpdateManyWithoutSchoolsInput";

export type SchoolUpdateInput = {
  activeSuscription?: SubscriptionWhereUniqueInput | null;
  name?: string | null;
  schoolDistrict?: SchoolDistrictWhereUniqueInput | null;
  SubscriptionHistory?: SubscriptionUpdateManyWithoutSchoolsInput;
};
