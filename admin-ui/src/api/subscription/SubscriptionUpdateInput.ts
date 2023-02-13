import { ConfigurableModuleUpdateManyWithoutSubscriptionsInput } from "./ConfigurableModuleUpdateManyWithoutSubscriptionsInput";
import { SchoolDistrictUpdateManyWithoutSubscriptionsInput } from "./SchoolDistrictUpdateManyWithoutSubscriptionsInput";
import { SubscriptionPlanUpdateManyWithoutSubscriptionsInput } from "./SubscriptionPlanUpdateManyWithoutSubscriptionsInput";

export type SubscriptionUpdateInput = {
  amount?: number;
  configurableModules?: ConfigurableModuleUpdateManyWithoutSubscriptionsInput;
  isStanderd?: boolean;
  name?: string;
  period?: "Monthly" | "Yearly" | null;
  schoolDistricts?: SchoolDistrictUpdateManyWithoutSubscriptionsInput;
  subscriptionPlans?: SubscriptionPlanUpdateManyWithoutSubscriptionsInput;
};
