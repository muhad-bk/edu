import { ChartVistCreateNestedManyWithoutStafsInput } from "./ChartVistCreateNestedManyWithoutStafsInput";
import { SchoolCreateNestedManyWithoutStafsInput } from "./SchoolCreateNestedManyWithoutStafsInput";
import { SchoolDistrictWhereUniqueInput } from "../schoolDistrict/SchoolDistrictWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type StafCreateInput = {
  chartVists?: ChartVistCreateNestedManyWithoutStafsInput;
  school?: SchoolCreateNestedManyWithoutStafsInput;
  schoolDistricts?: SchoolDistrictWhereUniqueInput | null;
  user: UserWhereUniqueInput;
};
