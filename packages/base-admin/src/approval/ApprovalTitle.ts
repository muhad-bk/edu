import { Approval as TApproval } from "../api/approval/Approval";

export const APPROVAL_TITLE_FIELD = "authorisationLetter";

export const ApprovalTitle = (record: TApproval): string => {
  return record.authorisationLetter || String(record.id);
};
