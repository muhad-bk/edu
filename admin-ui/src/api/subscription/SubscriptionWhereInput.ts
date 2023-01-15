import { FloatFilter } from "../../util/FloatFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { SchoolListRelationFilter } from "../school/SchoolListRelationFilter";
import { SchoolWhereUniqueInput } from "../school/SchoolWhereUniqueInput";

export type SubscriptionWhereInput = {
  amount?: FloatFilter;
  id?: StringFilter;
  isStanderd?: BooleanFilter;
  name?: StringFilter;
  period?: "Monthly" | "Yearly";
  schools?: SchoolListRelationFilter;
  schoolSubscriptionHistory?: SchoolWhereUniqueInput;
};
