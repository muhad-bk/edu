import { Subscription as TSubscription } from "../api/subscription/Subscription";

export const SUBSCRIPTION_TITLE_FIELD = "name";

export const SubscriptionTitle = (record: TSubscription): string => {
  return record.name || String(record.id);
};
