import { SchoolCreateNestedManyWithoutSchoolDistrictsInput } from "./SchoolCreateNestedManyWithoutSchoolDistrictsInput";

export type SchoolDistrictCreateInput = {
  schools?: SchoolCreateNestedManyWithoutSchoolDistrictsInput;
};
