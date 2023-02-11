import { SchoolDistrict as TSchoolDistrict } from "../api/schoolDistrict/SchoolDistrict";

export const SCHOOLDISTRICT_TITLE_FIELD = "name";

export const SchoolDistrictTitle = (record: TSchoolDistrict): string => {
  return record.name || String(record.id);
};
