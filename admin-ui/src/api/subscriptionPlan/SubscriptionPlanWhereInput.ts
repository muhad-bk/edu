import { StringFilter } from "../../util/StringFilter";
import { SubscriptionListRelationFilter } from "../subscription/SubscriptionListRelationFilter";

export type SubscriptionPlanWhereInput = {
  id?: StringFilter;
  subscriptions?: SubscriptionListRelationFilter;
};
