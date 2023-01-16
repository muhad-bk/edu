import { SchoolUpdateManyWithoutParentsInput } from "./SchoolUpdateManyWithoutParentsInput";
import { StudentUpdateManyWithoutParentsInput } from "./StudentUpdateManyWithoutParentsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ParentUpdateInput = {
  name?: string;
  schools?: SchoolUpdateManyWithoutParentsInput;
  students?: StudentUpdateManyWithoutParentsInput;
  user?: UserWhereUniqueInput | null;
};
