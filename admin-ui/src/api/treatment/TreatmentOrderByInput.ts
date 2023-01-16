import { SortOrder } from "../../util/SortOrder";

export type TreatmentOrderByInput = {
  approvalId?: SortOrder;
  chartVistId?: SortOrder;
  createdAt?: SortOrder;
  generalDetails?: SortOrder;
  id?: SortOrder;
  medicationDetails?: SortOrder;
  studentId?: SortOrder;
  timingDetails?: SortOrder;
  treatmentDetails?: SortOrder;
  updatedAt?: SortOrder;
};
