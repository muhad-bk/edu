import { ChartVistCreateNestedManyWithoutStafsInput } from "./ChartVistCreateNestedManyWithoutStafsInput";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";
import { SchoolCreateNestedManyWithoutStafsInput } from "./SchoolCreateNestedManyWithoutStafsInput";
import { SchoolDistrictWhereUniqueInput } from "../schoolDistrict/SchoolDistrictWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type StafCreateInput = {
  address?: string | null;
  chartVists?: ChartVistCreateNestedManyWithoutStafsInput;
  contactDetails?: string | null;
  destignation?: string | null;
  fullName?: string | null;
  gender?: "Male" | "Female" | "NotSpecified" | null;
  idNumber?: string | null;
  officialEmail?: string | null;
  race?: string | null;
  role?: RoleWhereUniqueInput | null;
  school?: SchoolCreateNestedManyWithoutStafsInput;
  schoolDistricts?: SchoolDistrictWhereUniqueInput | null;
  status?: "Active" | "Deactivate" | "Pending" | null;
  user: UserWhereUniqueInput;
};
