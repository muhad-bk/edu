import { ConfigurableModule } from "../configurableModule/ConfigurableModule";
import { SchoolDistrict } from "../schoolDistrict/SchoolDistrict";
import { SubscriptionPlan } from "../subscriptionPlan/SubscriptionPlan";

export type Subscription = {
  amount: number;
  configurableModules?: Array<ConfigurableModule>;
  createdAt: Date;
  id: string;
  isStanderd: boolean;
  name: string;
  period?: "Monthly" | "Yearly" | null;
  schoolDistricts?: Array<SchoolDistrict>;
  subscriptionPlans?: Array<SubscriptionPlan>;
  updatedAt: Date;
};
