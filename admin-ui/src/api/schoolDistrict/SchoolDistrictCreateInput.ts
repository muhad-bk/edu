import { SchoolCreateNestedManyWithoutSchoolDistrictsInput } from "./SchoolCreateNestedManyWithoutSchoolDistrictsInput";
import { StafCreateNestedManyWithoutSchoolDistrictsInput } from "./StafCreateNestedManyWithoutSchoolDistrictsInput";

export type SchoolDistrictCreateInput = {
  name: string;
  schools?: SchoolCreateNestedManyWithoutSchoolDistrictsInput;
  stafs?: StafCreateNestedManyWithoutSchoolDistrictsInput;
};
