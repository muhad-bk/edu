import { SubscriptionCreateNestedManyWithoutConfigurableModulesInput } from "./SubscriptionCreateNestedManyWithoutConfigurableModulesInput";

export type ConfigurableModuleCreateInput = {
  description?: string | null;
  name: string;
  subscriptionsConfigModules?: SubscriptionCreateNestedManyWithoutConfigurableModulesInput;
};
