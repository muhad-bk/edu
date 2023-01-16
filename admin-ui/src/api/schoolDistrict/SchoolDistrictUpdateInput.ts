import { RoleUpdateManyWithoutSchoolDistrictsInput } from "./RoleUpdateManyWithoutSchoolDistrictsInput";
import { SchoolUpdateManyWithoutSchoolDistrictsInput } from "./SchoolUpdateManyWithoutSchoolDistrictsInput";
import { StafUpdateManyWithoutSchoolDistrictsInput } from "./StafUpdateManyWithoutSchoolDistrictsInput";
import { SubscriptionWhereUniqueInput } from "../subscription/SubscriptionWhereUniqueInput";

export type SchoolDistrictUpdateInput = {
  name?: string;
  roles?: RoleUpdateManyWithoutSchoolDistrictsInput;
  schools?: SchoolUpdateManyWithoutSchoolDistrictsInput;
  stafs?: StafUpdateManyWithoutSchoolDistrictsInput;
  subscription?: SubscriptionWhereUniqueInput | null;
};
