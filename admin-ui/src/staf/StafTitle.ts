import { Staf as TStaf } from "../api/staf/Staf";

export const STAF_TITLE_FIELD = "id";

export const StafTitle = (record: TStaf): string => {
  return record.id || String(record.id);
};
