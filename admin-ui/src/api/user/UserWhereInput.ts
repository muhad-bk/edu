import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StafListRelationFilter } from "../staf/StafListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  fullName?: StringNullableFilter;
  id?: StringFilter;
  language?: "English";
  profilePicUrl?: StringNullableFilter;
  stafs?: StafListRelationFilter;
  username?: StringFilter;
};
