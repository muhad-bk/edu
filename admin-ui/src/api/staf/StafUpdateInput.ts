import { ChartVistUpdateManyWithoutStafsInput } from "./ChartVistUpdateManyWithoutStafsInput";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";
import { SchoolUpdateManyWithoutStafsInput } from "./SchoolUpdateManyWithoutStafsInput";
import { SchoolDistrictWhereUniqueInput } from "../schoolDistrict/SchoolDistrictWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type StafUpdateInput = {
  address?: string | null;
  chartVists?: ChartVistUpdateManyWithoutStafsInput;
  contactDetails?: string | null;
  destignation?: string | null;
  fullName?: string | null;
  gender?: "Male" | "Female" | "NotSpecified" | null;
  idNumber?: string | null;
  officialEmail?: string | null;
  race?: string | null;
  role?: RoleWhereUniqueInput | null;
  school?: SchoolUpdateManyWithoutStafsInput;
  schoolDistricts?: SchoolDistrictWhereUniqueInput | null;
  status?: "Active" | "Deactivate" | "Pending" | null;
  user?: UserWhereUniqueInput;
};
