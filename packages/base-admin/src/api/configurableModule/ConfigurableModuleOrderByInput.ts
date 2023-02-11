import { SortOrder } from "../../util/SortOrder";

export type ConfigurableModuleOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
