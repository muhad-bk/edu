import { StafWhereInput } from "./StafWhereInput";
import { StafOrderByInput } from "./StafOrderByInput";

export type StafFindManyArgs = {
  where?: StafWhereInput;
  orderBy?: Array<StafOrderByInput>;
  skip?: number;
  take?: number;
};
