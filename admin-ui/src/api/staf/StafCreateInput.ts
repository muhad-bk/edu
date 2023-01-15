import { SchoolCreateNestedManyWithoutStafsInput } from "./SchoolCreateNestedManyWithoutStafsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type StafCreateInput = {
  school?: SchoolCreateNestedManyWithoutStafsInput;
  user: UserWhereUniqueInput;
};
