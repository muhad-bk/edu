import { SchoolUpdateManyWithoutSchoolDistrictsInput } from "./SchoolUpdateManyWithoutSchoolDistrictsInput";
import { StafUpdateManyWithoutSchoolDistrictsInput } from "./StafUpdateManyWithoutSchoolDistrictsInput";

export type SchoolDistrictUpdateInput = {
  name?: string;
  schools?: SchoolUpdateManyWithoutSchoolDistrictsInput;
  stafs?: StafUpdateManyWithoutSchoolDistrictsInput;
};
