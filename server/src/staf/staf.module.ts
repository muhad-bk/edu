import { Module } from "@nestjs/common";
import { StafModuleBase } from "./base/staf.module.base";
import { StafService } from "./staf.service";
import { StafController } from "./staf.controller";
import { StafResolver } from "./staf.resolver";

@Module({
  imports: [StafModuleBase],
  controllers: [StafController],
  providers: [StafService, StafResolver],
  exports: [StafService],
})
export class StafModule {}
