import { ChartVist as TChartVist } from "../api/chartVist/ChartVist";

export const CHARTVIST_TITLE_FIELD = "endTime";

export const ChartVistTitle = (record: TChartVist): string => {
  return record.endTime || String(record.id);
};
