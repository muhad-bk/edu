import { Module } from "@nestjs/common";
import { ChartVistModuleBase } from "./base/chartVist.module.base";
import { ChartVistService } from "./chartVist.service";
import { ChartVistController } from "./chartVist.controller";
import { ChartVistResolver } from "./chartVist.resolver";

@Module({
  imports: [ChartVistModuleBase],
  controllers: [ChartVistController],
  providers: [ChartVistService, ChartVistResolver],
  exports: [ChartVistService],
})
export class ChartVistModule {}
