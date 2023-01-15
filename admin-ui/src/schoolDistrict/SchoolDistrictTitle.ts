import { SchoolDistrict as TSchoolDistrict } from "../api/schoolDistrict/SchoolDistrict";

export const SCHOOLDISTRICT_TITLE_FIELD = "id";

export const SchoolDistrictTitle = (record: TSchoolDistrict): string => {
  return record.id || String(record.id);
};
