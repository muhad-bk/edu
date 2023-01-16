import { ConfigurableModuleUpdateManyWithoutSubscriptionsInput } from "./ConfigurableModuleUpdateManyWithoutSubscriptionsInput";
import { SchoolUpdateManyWithoutSubscriptionsInput } from "./SchoolUpdateManyWithoutSubscriptionsInput";
import { SchoolWhereUniqueInput } from "../school/SchoolWhereUniqueInput";
import { SubscriptionPlanUpdateManyWithoutSubscriptionsInput } from "./SubscriptionPlanUpdateManyWithoutSubscriptionsInput";

export type SubscriptionUpdateInput = {
  amount?: number;
  configurableModules?: ConfigurableModuleUpdateManyWithoutSubscriptionsInput;
  isStanderd?: boolean;
  name?: string;
  period?: "Monthly" | "Yearly" | null;
  schools?: SchoolUpdateManyWithoutSubscriptionsInput;
  schoolSubscriptionHistory?: SchoolWhereUniqueInput | null;
  subscriptionPlans?: SubscriptionPlanUpdateManyWithoutSubscriptionsInput;
};
