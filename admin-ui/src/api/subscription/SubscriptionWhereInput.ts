import { FloatFilter } from "../../util/FloatFilter";
import { ConfigurableModuleListRelationFilter } from "../configurableModule/ConfigurableModuleListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { SchoolListRelationFilter } from "../school/SchoolListRelationFilter";
import { SchoolWhereUniqueInput } from "../school/SchoolWhereUniqueInput";

export type SubscriptionWhereInput = {
  amount?: FloatFilter;
  configurableModules?: ConfigurableModuleListRelationFilter;
  id?: StringFilter;
  isStanderd?: BooleanFilter;
  name?: StringFilter;
  period?: "Monthly" | "Yearly";
  schools?: SchoolListRelationFilter;
  schoolSubscriptionHistory?: SchoolWhereUniqueInput;
};
