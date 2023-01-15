import { School } from "../school/School";

export type Subscription = {
  amount: number;
  createdAt: Date;
  id: string;
  isStanderd: boolean;
  name: string;
  period?: "Monthly" | "Yearly" | null;
  schools?: Array<School>;
  schoolSubscriptionHistory?: School | null;
  updatedAt: Date;
};
