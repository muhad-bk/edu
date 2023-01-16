import { ChartVistWhereInput } from "./ChartVistWhereInput";
import { ChartVistOrderByInput } from "./ChartVistOrderByInput";

export type ChartVistFindManyArgs = {
  where?: ChartVistWhereInput;
  orderBy?: Array<ChartVistOrderByInput>;
  skip?: number;
  take?: number;
};
