import { ConfigurableModule as TConfigurableModule } from "../api/configurableModule/ConfigurableModule";

export const CONFIGURABLEMODULE_TITLE_FIELD = "name";

export const ConfigurableModuleTitle = (
  record: TConfigurableModule
): string => {
  return record.name || String(record.id);
};
