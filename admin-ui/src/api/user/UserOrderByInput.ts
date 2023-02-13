import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  fullName?: SortOrder;
  id?: SortOrder;
  language?: SortOrder;
  password?: SortOrder;
  profilePicUrl?: SortOrder;
  roles?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
