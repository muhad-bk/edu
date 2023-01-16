import { Subscription } from "../subscription/Subscription";

export type SubscriptionPlan = {
  createdAt: Date;
  id: string;
  subscriptions?: Array<Subscription>;
  updatedAt: Date;
};
