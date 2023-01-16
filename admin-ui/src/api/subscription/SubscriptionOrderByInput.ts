import { SortOrder } from "../../util/SortOrder";

export type SubscriptionOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  isStanderd?: SortOrder;
  name?: SortOrder;
  period?: SortOrder;
  updatedAt?: SortOrder;
};
