import { Parent as TParent } from "../api/parent/Parent";

export const PARENT_TITLE_FIELD = "name";

export const ParentTitle = (record: TParent): string => {
  return record.name || String(record.id);
};
