import { Module } from "@nestjs/common";
import { ConfigurableModuleModuleBase } from "./base/configurableModule.module.base";
import { ConfigurableModuleService } from "./configurableModule.service";
import { ConfigurableModuleController } from "./configurableModule.controller";
import { ConfigurableModuleResolver } from "./configurableModule.resolver";

@Module({
  imports: [ConfigurableModuleModuleBase],
  controllers: [ConfigurableModuleController],
  providers: [ConfigurableModuleService, ConfigurableModuleResolver],
  exports: [ConfigurableModuleService],
})
export class ConfigurableModuleModule {}
