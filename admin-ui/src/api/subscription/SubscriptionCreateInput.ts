import { ConfigurableModuleCreateNestedManyWithoutSubscriptionsInput } from "./ConfigurableModuleCreateNestedManyWithoutSubscriptionsInput";
import { SchoolCreateNestedManyWithoutSubscriptionsInput } from "./SchoolCreateNestedManyWithoutSubscriptionsInput";
import { SchoolWhereUniqueInput } from "../school/SchoolWhereUniqueInput";

export type SubscriptionCreateInput = {
  amount: number;
  configurableModules?: ConfigurableModuleCreateNestedManyWithoutSubscriptionsInput;
  isStanderd: boolean;
  name: string;
  period?: "Monthly" | "Yearly" | null;
  schools?: SchoolCreateNestedManyWithoutSubscriptionsInput;
  schoolSubscriptionHistory?: SchoolWhereUniqueInput | null;
};
