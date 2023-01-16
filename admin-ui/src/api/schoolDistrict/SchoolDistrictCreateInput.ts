import { RoleCreateNestedManyWithoutSchoolDistrictsInput } from "./RoleCreateNestedManyWithoutSchoolDistrictsInput";
import { SchoolCreateNestedManyWithoutSchoolDistrictsInput } from "./SchoolCreateNestedManyWithoutSchoolDistrictsInput";
import { StafCreateNestedManyWithoutSchoolDistrictsInput } from "./StafCreateNestedManyWithoutSchoolDistrictsInput";
import { SubscriptionWhereUniqueInput } from "../subscription/SubscriptionWhereUniqueInput";

export type SchoolDistrictCreateInput = {
  name: string;
  roles?: RoleCreateNestedManyWithoutSchoolDistrictsInput;
  schools?: SchoolCreateNestedManyWithoutSchoolDistrictsInput;
  stafs?: StafCreateNestedManyWithoutSchoolDistrictsInput;
  subscription?: SubscriptionWhereUniqueInput | null;
};
