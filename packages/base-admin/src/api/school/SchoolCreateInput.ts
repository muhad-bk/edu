import { ChartVistCreateNestedManyWithoutSchoolsInput } from "./ChartVistCreateNestedManyWithoutSchoolsInput";
import { ParentWhereUniqueInput } from "../parent/ParentWhereUniqueInput";
import { RoleCreateNestedManyWithoutSchoolsInput } from "./RoleCreateNestedManyWithoutSchoolsInput";
import { SchoolDistrictWhereUniqueInput } from "../schoolDistrict/SchoolDistrictWhereUniqueInput";
import { StafCreateNestedManyWithoutSchoolsInput } from "./StafCreateNestedManyWithoutSchoolsInput";
import { StudentCreateNestedManyWithoutSchoolsInput } from "./StudentCreateNestedManyWithoutSchoolsInput";

export type SchoolCreateInput = {
  abbreviation?: string | null;
  address?: string | null;
  chartVists?: ChartVistCreateNestedManyWithoutSchoolsInput;
  logoUrl?: string | null;
  name?: string | null;
  parent?: ParentWhereUniqueInput | null;
  roles?: RoleCreateNestedManyWithoutSchoolsInput;
  schoolCode: string;
  schoolDistrict?: SchoolDistrictWhereUniqueInput | null;
  stafs?: StafCreateNestedManyWithoutSchoolsInput;
  state: "Sate_1" | "State_2";
  status?: "Active" | "Deactivate" | "Pending" | null;
  students?: StudentCreateNestedManyWithoutSchoolsInput;
  township: "T1" | "T2";
};
