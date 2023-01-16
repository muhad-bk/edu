import { SchoolCreateNestedManyWithoutStafsInput } from "./SchoolCreateNestedManyWithoutStafsInput";
import { SchoolDistrictWhereUniqueInput } from "../schoolDistrict/SchoolDistrictWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type StafCreateInput = {
  school?: SchoolCreateNestedManyWithoutStafsInput;
  schoolDistricts?: SchoolDistrictWhereUniqueInput | null;
  user: UserWhereUniqueInput;
};
