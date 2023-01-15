import { SchoolUpdateManyWithoutSubscriptionsInput } from "./SchoolUpdateManyWithoutSubscriptionsInput";
import { SchoolWhereUniqueInput } from "../school/SchoolWhereUniqueInput";

export type SubscriptionUpdateInput = {
  amount?: number;
  isStanderd?: boolean;
  name?: string;
  period?: "Monthly" | "Yearly" | null;
  schools?: SchoolUpdateManyWithoutSubscriptionsInput;
  schoolSubscriptionHistory?: SchoolWhereUniqueInput | null;
};
