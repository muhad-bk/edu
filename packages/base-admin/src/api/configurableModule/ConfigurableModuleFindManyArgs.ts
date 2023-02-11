import { ConfigurableModuleWhereInput } from "./ConfigurableModuleWhereInput";
import { ConfigurableModuleOrderByInput } from "./ConfigurableModuleOrderByInput";

export type ConfigurableModuleFindManyArgs = {
  where?: ConfigurableModuleWhereInput;
  orderBy?: Array<ConfigurableModuleOrderByInput>;
  skip?: number;
  take?: number;
};
