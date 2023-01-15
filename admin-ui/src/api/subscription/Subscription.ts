import { ConfigurableModule } from "../configurableModule/ConfigurableModule";
import { School } from "../school/School";

export type Subscription = {
  amount: number;
  configurableModules?: Array<ConfigurableModule>;
  createdAt: Date;
  id: string;
  isStanderd: boolean;
  name: string;
  period?: "Monthly" | "Yearly" | null;
  schools?: Array<School>;
  schoolSubscriptionHistory?: School | null;
  updatedAt: Date;
};
