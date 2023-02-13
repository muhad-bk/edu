import { Staf as TStaf } from "../api/staf/Staf";

export const STAF_TITLE_FIELD = "fullName";

export const StafTitle = (record: TStaf): string => {
  return record.fullName || String(record.id);
};
