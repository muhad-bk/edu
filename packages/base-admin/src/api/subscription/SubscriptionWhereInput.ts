import { FloatFilter } from "../../util/FloatFilter";
import { ConfigurableModuleListRelationFilter } from "../configurableModule/ConfigurableModuleListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { SchoolDistrictListRelationFilter } from "../schoolDistrict/SchoolDistrictListRelationFilter";
import { SubscriptionPlanListRelationFilter } from "../subscriptionPlan/SubscriptionPlanListRelationFilter";

export type SubscriptionWhereInput = {
  amount?: FloatFilter;
  configurableModules?: ConfigurableModuleListRelationFilter;
  id?: StringFilter;
  isStanderd?: BooleanFilter;
  name?: StringFilter;
  period?: "Monthly" | "Yearly";
  schoolDistricts?: SchoolDistrictListRelationFilter;
  subscriptionPlans?: SubscriptionPlanListRelationFilter;
};
