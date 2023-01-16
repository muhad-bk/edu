import { SchoolUpdateManyWithoutStafsInput } from "./SchoolUpdateManyWithoutStafsInput";
import { SchoolDistrictWhereUniqueInput } from "../schoolDistrict/SchoolDistrictWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type StafUpdateInput = {
  school?: SchoolUpdateManyWithoutStafsInput;
  schoolDistricts?: SchoolDistrictWhereUniqueInput | null;
  user?: UserWhereUniqueInput;
};
