import { SubscriptionWhereUniqueInput } from "../subscription/SubscriptionWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SchoolDistrictWhereUniqueInput } from "../schoolDistrict/SchoolDistrictWhereUniqueInput";
import { SubscriptionListRelationFilter } from "../subscription/SubscriptionListRelationFilter";

export type SchoolWhereInput = {
  activeSuscription?: SubscriptionWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
  schoolDistrict?: SchoolDistrictWhereUniqueInput;
  SubscriptionHistory?: SubscriptionListRelationFilter;
};
