import { ChartVistUpdateManyWithoutSchoolsInput } from "./ChartVistUpdateManyWithoutSchoolsInput";
import { ParentWhereUniqueInput } from "../parent/ParentWhereUniqueInput";
import { RoleUpdateManyWithoutSchoolsInput } from "./RoleUpdateManyWithoutSchoolsInput";
import { SchoolDistrictWhereUniqueInput } from "../schoolDistrict/SchoolDistrictWhereUniqueInput";
import { StafUpdateManyWithoutSchoolsInput } from "./StafUpdateManyWithoutSchoolsInput";
import { StudentUpdateManyWithoutSchoolsInput } from "./StudentUpdateManyWithoutSchoolsInput";

export type SchoolUpdateInput = {
  abbreviation?: string | null;
  address?: string | null;
  chartVists?: ChartVistUpdateManyWithoutSchoolsInput;
  logoUrl?: string | null;
  name?: string | null;
  parent?: ParentWhereUniqueInput | null;
  roles?: RoleUpdateManyWithoutSchoolsInput;
  schoolCode?: string;
  schoolDistrict?: SchoolDistrictWhereUniqueInput | null;
  stafs?: StafUpdateManyWithoutSchoolsInput;
  state?: "Sate_1" | "State_2";
  status?: "Active" | "Deactivate" | "Pending" | null;
  students?: StudentUpdateManyWithoutSchoolsInput;
  township?: "T1" | "T2";
};
