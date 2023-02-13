import { SortOrder } from "../../util/SortOrder";

export type SchoolOrderByInput = {
  abbreviation?: SortOrder;
  address?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  logoUrl?: SortOrder;
  name?: SortOrder;
  parentId?: SortOrder;
  schoolCode?: SortOrder;
  schoolDistrictId?: SortOrder;
  state?: SortOrder;
  status?: SortOrder;
  township?: SortOrder;
  updatedAt?: SortOrder;
};
