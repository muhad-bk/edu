import { SchoolCreateNestedManyWithoutParentsInput } from "./SchoolCreateNestedManyWithoutParentsInput";
import { StudentCreateNestedManyWithoutParentsInput } from "./StudentCreateNestedManyWithoutParentsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ParentCreateInput = {
  name: string;
  schools?: SchoolCreateNestedManyWithoutParentsInput;
  students?: StudentCreateNestedManyWithoutParentsInput;
  user?: UserWhereUniqueInput | null;
};
