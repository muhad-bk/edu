import { SortOrder } from "../../util/SortOrder";

export type ApprovalOrderByInput = {
  authorisationLetter?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  recordId?: SortOrder;
  studentId?: SortOrder;
  updatedAt?: SortOrder;
};
