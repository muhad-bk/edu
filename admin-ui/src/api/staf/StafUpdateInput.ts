import { ChartVistUpdateManyWithoutStafsInput } from "./ChartVistUpdateManyWithoutStafsInput";
import { SchoolUpdateManyWithoutStafsInput } from "./SchoolUpdateManyWithoutStafsInput";
import { SchoolDistrictWhereUniqueInput } from "../schoolDistrict/SchoolDistrictWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type StafUpdateInput = {
  chartVists?: ChartVistUpdateManyWithoutStafsInput;
  school?: SchoolUpdateManyWithoutStafsInput;
  schoolDistricts?: SchoolDistrictWhereUniqueInput | null;
  user?: UserWhereUniqueInput;
};
