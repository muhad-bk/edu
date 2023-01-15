import { SchoolUpdateManyWithoutStafsInput } from "./SchoolUpdateManyWithoutStafsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type StafUpdateInput = {
  school?: SchoolUpdateManyWithoutStafsInput;
  user?: UserWhereUniqueInput;
};
