import { ConfigurableModuleCreateNestedManyWithoutSubscriptionsInput } from "./ConfigurableModuleCreateNestedManyWithoutSubscriptionsInput";
import { SchoolDistrictCreateNestedManyWithoutSubscriptionsInput } from "./SchoolDistrictCreateNestedManyWithoutSubscriptionsInput";
import { SubscriptionPlanCreateNestedManyWithoutSubscriptionsInput } from "./SubscriptionPlanCreateNestedManyWithoutSubscriptionsInput";

export type SubscriptionCreateInput = {
  amount: number;
  configurableModules?: ConfigurableModuleCreateNestedManyWithoutSubscriptionsInput;
  isStanderd: boolean;
  name: string;
  period?: "Monthly" | "Yearly" | null;
  schoolDistricts?: SchoolDistrictCreateNestedManyWithoutSubscriptionsInput;
  subscriptionPlans?: SubscriptionPlanCreateNestedManyWithoutSubscriptionsInput;
};
